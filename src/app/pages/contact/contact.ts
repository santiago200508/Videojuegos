import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  contactForm!: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder) {
    // Crear formulario con validaciones reales de Angular
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.minLength(3)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Para usar f.nombre, f.email, etc., en la plantilla
  get f(): any {
    return this.contactForm.controls;
  }

  cancelar() {
    if (this.submitting) return;
    this.contactForm.reset();
  }

  enviar(): void {
    // Forzar los errores si el usuario no ha rellenado nada
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      return;
    }

    this.submitting = true;

    const payload = {
      nombre: (this.f.nombre.value || '').trim(),
      email: (this.f.email.value || '').trim(),
      asunto: (this.f.asunto.value || '').trim(),
      mensaje: (this.f.mensaje.value || '').trim(),
      createdAt: new Date().toISOString()
    };

    try {
      const text = JSON.stringify(payload, null, 2);
      const blob = new Blob([text], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'contacto.json';
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      this.contactForm.reset();
    } catch (err) {
      console.error('Error al descargar JSON:', err);
      alert('No fue posible descargar el archivo.');
    } finally {
      this.submitting = false;
    }
  }
}

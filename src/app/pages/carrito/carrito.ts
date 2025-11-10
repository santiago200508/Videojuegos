import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService, ItemCarrito } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class Carrito implements OnInit {
  itemsCarrito: ItemCarrito[] = [];
  subtotal = 0;
  envio = 0;
  total = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.cargarCarrito();
    
    // Suscribirse a cambios del carrito
    this.carritoService.carrito$.subscribe(() => {
      this.cargarCarrito();
    });
  }

  cargarCarrito() {
    this.itemsCarrito = this.carritoService.obtenerCarrito();
    this.subtotal = this.carritoService.calcularSubtotal();
    this.envio = this.carritoService.calcularEnvio();
    this.total = this.carritoService.calcularTotal();
  }

  eliminarItem(juegoId: number) {
    if (confirm('¿Estás seguro de eliminar este juego del carrito?')) {
      this.carritoService.eliminarDelCarrito(juegoId);
    }
  }

  aumentarCantidad(juegoId: number) {
    this.carritoService.aumentarCantidad(juegoId);
  }

  disminuirCantidad(juegoId: number) {
    this.carritoService.disminuirCantidad(juegoId);
  }

  formatearPrecio(precio: number): string {
    return '$' + precio.toLocaleString('es-CO');
  }

  vaciarCarrito() {
    if (confirm('¿Estás seguro de vaciar todo el carrito?')) {
      this.carritoService.limpiarCarrito();
    }
  }

  realizarCompra() {
    alert('¡Gracias por tu compra! Esta es una versión de demostración. En un proyecto real aquí iría el proceso de pago.');
    this.carritoService.limpiarCarrito();
  }
}
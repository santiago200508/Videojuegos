import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JUEGOS, Juego } from '../../data/juegos';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  juegos = JUEGOS;
  juegosPagina: Juego[] = [];
  paginaActual = 1;
  juegosPorPagina = 6;
  totalPaginas = 3;
  juegoSeleccionado: Juego | null = null;

  constructor(private carritoService: CarritoService) {
  this.cargarJuegosPagina();
  }

  cargarJuegosPagina() {
    const inicio = (this.paginaActual - 1) * this.juegosPorPagina;
    const fin = inicio + this.juegosPorPagina;
    this.juegosPagina = this.juegos.slice(inicio, fin);
  }

  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
    this.cargarJuegosPagina();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  verDetalles(juego: Juego) {
    this.juegoSeleccionado = juego;
  }

  cerrarModal() {
    this.juegoSeleccionado = null;
  }

  formatearPrecio(precio: number): string {
    return '$' + precio.toLocaleString('es-CO');
  }

  calcularDescuento(precioAntes: number, precioAhora: number): number {
    return Math.round(((precioAntes - precioAhora) / precioAntes) * 100);
  }
  agregarAlCarrito(juego: Juego) {
  this.carritoService.agregarAlCarrito(juego);
  alert(`¡${juego.nombre} agregado al carrito!`);
}
}
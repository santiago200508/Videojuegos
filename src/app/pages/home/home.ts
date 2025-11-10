import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { JUEGOS } from '../../data/juegos';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true,
  imports: [RouterLink, CommonModule]
})
export class Home {
  juegosDestacados = JUEGOS.slice(0, 3); // Los primeros 3 juegos

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(juego: any) {
    this.carritoService.agregarAlCarrito(juego);
    alert(`¡${juego.nombre} agregado al carrito!`);
  }

  formatearPrecio(precio: number): string {
    return '$' + precio.toLocaleString('es-CO');
  }
}
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule]
})
export class Header implements OnInit {
  cantidadCarrito = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    // Suscribirse a los cambios del carrito
    this.carritoService.carrito$.subscribe(() => {
      this.cantidadCarrito = this.carritoService.obtenerCantidadTotal();
    });
  }
}
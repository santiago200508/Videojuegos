import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Juego } from '../data/juegos';

export interface ItemCarrito {
  juego: Juego;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private itemsCarrito: ItemCarrito[] = [];
  private carritoSubject = new BehaviorSubject<ItemCarrito[]>([]);
  
  carrito$ = this.carritoSubject.asObservable();

  constructor() {
    // Cargar carrito desde localStorage si existe
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.itemsCarrito = JSON.parse(carritoGuardado);
      this.carritoSubject.next(this.itemsCarrito);
    }
  }

  // Agregar producto al carrito
  agregarAlCarrito(juego: Juego) {
    const itemExistente = this.itemsCarrito.find(item => item.juego.id === juego.id);
    
    if (itemExistente) {
      // Si ya existe, aumentar cantidad
      itemExistente.cantidad++;
    } else {
      // Si no existe, agregar nuevo
      this.itemsCarrito.push({ juego, cantidad: 1 });
    }
    
    this.actualizarCarrito();
    return true;
  }

  // Eliminar producto del carrito
  eliminarDelCarrito(juegoId: number) {
    this.itemsCarrito = this.itemsCarrito.filter(item => item.juego.id !== juegoId);
    this.actualizarCarrito();
  }

  // Aumentar cantidad
  aumentarCantidad(juegoId: number) {
    const item = this.itemsCarrito.find(item => item.juego.id === juegoId);
    if (item) {
      item.cantidad++;
      this.actualizarCarrito();
    }
  }

  // Disminuir cantidad
  disminuirCantidad(juegoId: number) {
    const item = this.itemsCarrito.find(item => item.juego.id === juegoId);
    if (item && item.cantidad > 1) {
      item.cantidad--;
      this.actualizarCarrito();
    }
  }

  // Obtener items del carrito
  obtenerCarrito(): ItemCarrito[] {
    return this.itemsCarrito;
  }

  // Obtener cantidad total de items
  obtenerCantidadTotal(): number {
    return this.itemsCarrito.reduce((total, item) => total + item.cantidad, 0);
  }

  // Calcular subtotal
  calcularSubtotal(): number {
    return this.itemsCarrito.reduce((total, item) => {
      return total + (item.juego.precio * item.cantidad);
    }, 0);
  }

  // Calcular envío
  calcularEnvio(): number {
    return this.itemsCarrito.length > 0 ? 15000 : 0;
  }

  // Calcular total
  calcularTotal(): number {
    return this.calcularSubtotal() + this.calcularEnvio();
  }

  // Limpiar carrito
  limpiarCarrito() {
    this.itemsCarrito = [];
    this.actualizarCarrito();
  }

  // Verificar si un juego está en el carrito
  estaEnCarrito(juegoId: number): boolean {
    return this.itemsCarrito.some(item => item.juego.id === juegoId);
  }

  // Actualizar carrito y guardar en localStorage
  private actualizarCarrito() {
    this.carritoSubject.next(this.itemsCarrito);
    localStorage.setItem('carrito', JSON.stringify(this.itemsCarrito));
  }
}
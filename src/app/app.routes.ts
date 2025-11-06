import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Productos } from './pages/productos/productos';
import { Contact } from './pages/contact/contact';
import { Carrito } from './pages/carrito/carrito';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'productos', component: Productos },
  { path: 'contact', component: Contact },
  { path: 'carrito', component: Carrito },
  { path: '**', redirectTo: '/home' }
];
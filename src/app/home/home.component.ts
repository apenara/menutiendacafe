import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ElementosComponent } from '../elementos/elementos.component';
import { Menus } from '../menus';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, ElementosComponent, CommonModule],
  template: `

  <button mat-raised-button>Bebidas</button>
  <button mat-raised-button>desayunos</button>
  <button mat-raised-button>Button 3</button>
<div *ngFor="let menu of listaMenu">
  <app-elementos  [menu]="menu" ></app-elementos>

</div>

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listaMenu: Menus[] = [{
    "id": 1,
    "titulo": "Montecristo",
    "descripcion": "Sandwich montecristo, con dos capas de Queso , Jamon en Tostadas a la francesa",
    "imagen": "montescristo.jpg",
    "precio": 25000
  },
  {
    "id": 2,
    "titulo": "Tortillas",
    "descripcion": "Tortillas rellenas de huevo, tomate , tocineta y nuestra salsa de la casa",
    "imagen": "https://lh6.googleusercontent.com/CpAfV9vWP0BhK_WbOwqRFmNU8ASSk9Y02-H8EM7QgPh7OvmYR22UOgDjSuA6d_RsQy43n4I7VnBmpySc6mzf8ac",
    "precio": 25000
  },
  {
    "id": 3,
    "titulo": "Tostadas a la francesa",
    "descripcion": "Tostadas a la francesa en pan artesanal",

    "imagen": "https://lh5.googleusercontent.com/eUE5425stagiUL1J-ewMpBz8Rhrae3tgj9rnS4SH6hskIPknfVu7-Dm82oOAVX3k0ywOhGXu6IpxgOrLlRYhgxQ",
    "precio": 25000
  },
];




}

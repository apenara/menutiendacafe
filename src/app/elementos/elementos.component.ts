import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { Menus } from '../menus';

@Component({
  selector: 'app-elementos',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
 <mat-card class="menus" appearance="raised">
  <mat-card-header>
    <img mat-card-sm-image [src]="menu.imagen" alt="{{menu.titulo}}" class="imagen" >
    <mat-card-title-group>
      <mat-card-title class="titulos">{{menu.titulo}}</mat-card-title>
      <mat-card-subtitle class="contenido">{{menu.descripcion}}</mat-card-subtitle>
      <mat-card-subtitle class="precio">{{menu.precio}}</mat-card-subtitle>
    </mat-card-title-group>
  </mat-card-header>
  <mat-card-content>
  </mat-card-content>
</mat-card>
  `,
  styleUrl: './elementos.component.css'
})
export class ElementosComponent {
  @Input() menu!:Menus;

}

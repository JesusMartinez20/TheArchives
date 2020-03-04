import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  route: string;
}

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.css']
})
export class MetodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  metodos:Section[]=[
    {
      name:'Burbuja',
      route:'burbuja'
    },
    {
      name:'Seleccion',
      route:'seleccion'
    },
    {
      name:'Inserción',
      route:'insercion'
    },
    {
      name:'Bucket',
      route:'bucket'
    },
    {
      name:'Cuentas',
      route:'cuentas'
    },
    {
      name:'Merge',
      route:'merge'
    },
    {
      name:'Radix',
      route:'radix'
    },
    {
      name:'Shell',
      route:'shell'
    },
    {
      name:'Quicksort',
      route:'quicksort'
    },
  ];

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  estructuras:any[]=[
    {
      name:'Arreglos',
      route:'arreglos'
    },
    {
      name:'Cadenas',
      route:'cadenas'
    },
    {
      name:'Matrices',
      route:'matriz'
    },
    {
      name:'Pilas',
      route:'pilas'
    },
    {
      name:'Colas',
      route:'colas'
    },
    {
      name:'LSE',
      route:'LSE'
    },
    {
      name:'LDE',
      route:'LDE'
    },
    {
      name:'Grafos',
      route:'Grafos'
    },
  ];

}

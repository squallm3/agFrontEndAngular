import { Component, OnInit } from '@angular/core';
import { WorkPlaces } from './workplaces.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  importPro = {
    title: 'Import Pro',
    position1: ['Developer', 'Junio 2021 - Actualidad', 'Desarrollo de herramientas para el acompañamiento de los procesos internos.'],
    position2: ['Project Manager', 'Junio 2021 - Actualidad', 'Gestión de diversos proyectos de optimización de recursos.'],
    position3: ['Análisis e Implementación de Procesos Internos', 'Junio 2021 - Actualidad', 'Relevamiento  e implementación de procesos en diversas herramientas informáticas.']
  }

  importProPrueba = new WorkPlaces('Import Pro', 'Julio 2021', 'Test', 'test2', 'test3');

  constructor() { }

  ngOnInit(): void {
  }

}

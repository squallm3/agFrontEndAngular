import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    new Project(
    '2022 - CV con Front End Dinámico en Angular',
    'assets/logo_argentina_programa.webp',
    'A través del programa Argentina Programa tuve que diseñar una página web de mi CV. El front end fue diseñado con Angular y tenía propiedades de edición del contenido.',
    'https://www.pepe.com',
    'assets/argentinaProgCv1.png',
    'assets/argentinaProgCv2.png',
    'assets/argentinaProgCv3.png'
    ),
    new Project(
    '2022 - CV con Front End Estatico utilizando HTML, CSS y Bootstrap',
    'assets/logo_argentina_programa.webp',
    'A través del programa Argentina Programa tuve que diseñar una página web de mi CV. El front end fue diseñado con Angular y tenía propiedades de edición del contenido. ',
    'https://www.pepe.com',
    'assets/argentinaProgCv1.png',
    'assets/argentinaProgCv2.png',
    'assets/argentinaProgCv3.png',
    ),
    new Project(
      '2022 - Estadísticas Comerciales en Python',
      'assets/logo_import_pro.png',
      'Desarrolle para la empresa en la que estoy contratado un script en python para realizar Estadísticas sobre los usuarios del sitio web de E-Commerce.',
      'https://www.pepe.com',
      'assets/argentinaProgCv1.png',
      'assets/argentinaProgCv2.png',
      'assets/argentinaProgCv3.png',
      ),

]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = {
    'Inglés': 75,
    'Python': 75,
    'HTML': 75,
    'CSS': 75,
    'Administración del tiempo': 100,
    'Habilidades de Organización': 100,
    'Resolución de Problemas': 100,
    'Habilidades Administrativas': 100,
  };
  

  constructor() { }

  ngOnInit(): void {
  }

  sortNull() {return 0;}

}

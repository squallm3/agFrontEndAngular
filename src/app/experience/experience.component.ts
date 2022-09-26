import { Component, OnInit } from '@angular/core';
import { importPro, acumar } from './workplacesmockup';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  importPro = importPro;
  acumar = acumar;

  constructor() { }

  ngOnInit(): void {
  }

}

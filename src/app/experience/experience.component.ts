import { Component, OnInit } from '@angular/core';
import { workPlacesArr } from './workplacesmockup';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  workPlacesArr = workPlacesArr;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { college } from './educationMockup';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  college = college;

  constructor() { }

  ngOnInit(): void {
  }

}

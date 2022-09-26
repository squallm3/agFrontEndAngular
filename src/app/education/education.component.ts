import { Component, OnInit } from '@angular/core';
import { college, microsoft, coursera, duolingo, edx, inap, proydesa} from './educationMockup';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  college = college;
  microsoft = microsoft;
  coursera = coursera; 
  duolingo = duolingo;
  edx = edx;
  inap = inap;
  proydesa = proydesa;

  constructor() { }

  ngOnInit(): void {
  }

}

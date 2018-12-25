import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.css']
})
export class CustompipesComponent implements OnInit {

  state={sName:"Karnataka",
  sPopulation:62000000,
  sFormation:new Date(1956,12,1),
  sRating:3.9765,
  sCurrency:100,
  sPercentage:0.83,  
};
  constructor() { }

  ngOnInit() {
  }

}

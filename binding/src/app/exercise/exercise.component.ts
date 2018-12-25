import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  constructor() { }

   myFontSize="20px";
   mleft="0em";
   shadow="0em";
   mtop="0em";

  myKeyPressFontSize(givenInput)
  {
   this.myFontSize = givenInput + "em"; 
  }
  myKeyPressLeftMargin(givenInput1)
  {
     this.mleft= givenInput1; 
  }
  myKeyPressTopMargin(givenInput2)
  {
     this.mtop=givenInput2;
  }
  color="red";
  myMouseOver()
  {
    this.color="green";
  }
  myMouseDown()
  {
    this.color="blue";
  }
  myDoubleClick()
  {
    this.shadow="-1px -1px red,-1px 1px red,1px -1px red,1px 1px red";  
  }
  // Pipes Description

  demo={
    sCurrency:100,
    sPercentage:0.83
  }
  // myKeyPressLeftMargin
  ngOnInit() { 
  }

}

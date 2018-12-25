import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

   mySaveFunction()
   {
       console.log("Button was pressed--> Button Handling");
   }
   myKeyPress()
   {
     console.log("User has given input and press enter");
   }
   myKeyPressWithValue(givenInput)
   {
     console.log("User Enter Value: " + givenInput);
   }
   color="red";
   myFun()
   {    
        this.color="green";    
   }
   mySaveFunctionWithEvent($event)
   {
      console.log("The Event object: " +$event);
   } 
  myDivButtonEvent()
  {
    console.log("Button was pressed--> Div Handler parent"); 
  }
    mySaveFunctiontwoWithEvent($event)   
   {
    console.log("Bubbling child");
    $event.stopPropagation();  //Only For Child Function called in Using stop propagation() Method
   }

  constructor() { }

  ngOnInit() {
  }

}

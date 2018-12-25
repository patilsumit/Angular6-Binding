import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  myAppTitle="Binding Example";
  bindingMaterials=["Fevicol","Feviquick","Camelgum"];
  imageLink="http://www.pidilite.com/wp-content/uploads/2016/08/SIde-image.png";
  myParagraph="Binding requires binder with fevicol";
  myButtonStatus=true;
  myBackground="green";

  constructor() { }

  ngOnInit() {
  }

}

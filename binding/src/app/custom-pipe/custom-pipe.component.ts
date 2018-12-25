import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  par="This is my Customfile pipe and also have custom file pipe and saw in html page sumit patil dhirubhai ni wadi navsari gujarat";
  
  constructor() { }
    
  ngOnInit() {
  }

}

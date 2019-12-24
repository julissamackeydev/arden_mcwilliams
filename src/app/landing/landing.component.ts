import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }
  view = 0
  images = [
    {
      "piece":
      "/assets/paintings/redhouse.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/paintings/littlegirl.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/paintings/dogs.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/paintings/nudeselfie.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/paintings/windowinparis.jpeg",
      "description": "oil on canvas 18in x 24in"
    }
  ];
  ngOnInit() {
  }
  viewimage(event){

    if (this.view === 1){
      this.view = 0;
      return;
    }
    else{
      this.view = 1;
      return;
    }

  }
}

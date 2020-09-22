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
      "/assets/contemporary/green_birdwing_1.jpg",
      "description": "oil and ink on canvas 36in x 48in"
    },
    {
      "piece":
      "/assets/contemporary/sunset_moth_3.jpg",
      "description": "oil and ink on canvas 36in x 48in"
    },
    {
      "piece":
      "/assets/contemporary/sunset_moth_2.jpg",
      "description": "oil and ink on canvas 24in x 36in"
    },
    {
      "piece":
      "/assets/contemporary/sunset_moth_1.jpg",
      "description": "oil on canvas 36in x 48in"
    },
    {
      "piece":
      "/assets/paintings/singingourpeace.PNG",
      "description": "oil and ink on canvas 36in x 48in"
    },
    {
      "piece":
      "/assets/paintings/redhouse.jpeg",
      "description": "oil on canvas 36in x 48in"
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
      "description": "oil on canvas 30in x 40in"
    },
    {
      "piece":
      "/assets/paintings/windowinparis.jpeg",
      "description": "oil on canvas 4ft x 6ft"
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

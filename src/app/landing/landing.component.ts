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
      "title": "Calm (homage to Flandrin) ",
      "piece":
      "/assets/paintings/nudeselfie.jpeg",
      "description": "oil on canvas 30in x 40in"
    },
    {
      "title": "Adriandolo I",
      "piece":
      "/assets/contemporary/sunset_moth_1.jpg",
      "description": "oil on canvas 36in x 48in"
    },
    {
      "title": "Singing Our Peace",
      "piece":
      "/assets/paintings/singingourpeace.PNG",
      "description": "oil on canvas 36in x 48in"
    },
    {
      "title": "Adriandolo II",
      "piece":
      "/assets/contemporary/sunset_moth_2.jpg",
      "description": "oil on canvas 24in x 36in"
    },
    {
      "title":"Jackson v. World",
      "piece":
        "/assets/painting_commissions/jackson_v_world.jpg",
      "description": " 30in x 40in oil on canvas"
    },
    {
      "title": "Adriandolo III",
      "piece":
      "/assets/contemporary/sunset_moth_3.jpg",
      "description": "oil on canvas 36in x 48in"
    },
    {
      "title": "In Loving Memory",
      "piece":
      "/assets/paintings/littlegirl.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "title": "Green Birdwing",
      "piece":
      "/assets/contemporary/green_birdwing_1.jpg",
      "description": "oil on canvas 30in x 40in"
    },
    {
      "title": "Bella & Karma",
      "piece":
        "/assets/painting_commissions/bella_and_karma.jpg",
      "description": "oil on canvas 16in x 20in"
    },
    {
      "title": "3121 Ashford Rd.",
      "piece":
      "/assets/paintings/redhouse.jpeg",
      "description": "oil on canvas 36in x 48in"
    },
    {
      "title":"Wenny & Lisa: 50 Years Strong",
      "piece":
        "/assets/painting_commissions/wenny_and_lisa_50_years_strong.jpg",
      "description": "oil on canvas 16in x 20in"
    },
    {
      "title": "Sandy & Arya",
      "piece":
      "/assets/paintings/dogs.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "title": "Window in Paris",
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

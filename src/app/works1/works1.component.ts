import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works1',
  templateUrl: './works1.component.html',
  styleUrls: ['./works1.component.css']
})
export class Works1Component implements OnInit {

  constructor() { }
  images = [
    {
      "piece":
      "/assets/redhouse.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/littlegirl.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/dogs.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/nudeselfie.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/windowinparis.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/farmhouse.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/couple.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/boats.jpeg",
      "description": "oil on canvas 18in x 24in"
    }
  ];
  
  ngOnInit() {
  }

}

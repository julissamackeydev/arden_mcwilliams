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
    },
    {
      "piece":
      "/assets/paintings/farmhouse.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/paintings/couple.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/paintings/boats.jpeg",
      "description": "oil on canvas 18in x 24in"
    }
  ];
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works3',
  templateUrl: './works3.component.html',
  styleUrls: ['./works3.component.css']
})
export class Works3Component implements OnInit {

  constructor() { }
  selectedImage = ""
  butterflies = [
    {
      "piece":
        "/assets/contemporary/green_birdwing_1.jpg",
      "description": "oil on canvas 30in x 40in"
    },
    {
      "piece":
        "/assets/contemporary/sunset_moth_3.jpg",
      "description": "oil on canvas 36in x 48in"
    },
    {
      "piece":
        "/assets/contemporary/sunset_moth_1.jpg",
      "description": "oil on canvas 36in x 48in"
    }, {
      "piece":
        "/assets/contemporary/sunset_moth_2.jpg",
      "description": "oil on canvas 24in x 36in"
    }]
  parents = [
    {
      "piece":
        "/assets/paintings/singingourpeace.PNG",
      "description": "oil on canvas 36in x 48in"
    }]
  street_art = [
    {
      "piece":
        "/assets/street_art/hope.JPG",
      "description": "spray paint on plywood 4ft x 6ft"
    },
    {
      "piece":
        "/assets/street_art/joelle.JPG",
      "description": "spray paint on plywood 3ft x 4ft"
    }]
  dogs = [
    {
      "piece":
        "/assets/painting_commissions/honey_and_harley.jpg",
      "description": "oil on canvas 16in x 20in"
    },
    {
      "piece":
        "/assets/painting_commissions/bella_and_karma.jpg",
      "description": "oil on canvas 16in x 20in"
    },
    {
      "piece":
        "/assets/painting_commissions/bear.jpg",
      "description": "oil on canvas 11in x 14in"
    },
    {
      "piece":
        "/assets/paintings/dogs.jpeg",
      "description": "oil on canvas 18in x 24in"
    }]
  cities = [
    {
      "piece":
        "/assets/painting_commissions/18NMoore.jpg",
      "description": "oil on canvas 11in x 14in"
    },
    {
      "piece":
        "/assets/paintings/windowinparis.jpeg",
      "description": "oil on canvas 4ft x 6ft"
    }]
  rural = [
    {
      "piece":
        "/assets/paintings/farmhouse2.jpg",
      "description": "oil on canvas 24in x 30in"
    },
    {
      "piece":
        "/assets/paintings/redhouse.jpeg",
      "description": "oil on canvas 36in x 48in"
    },
    {
      "piece":
        "/assets/paintings/boats.jpeg",
      "description": "oil on canvas 18in x 24in"
    }]
  girls = [
    {
      "piece":
        "/assets/painting_commissions/teddi.jpg",
      "description": "oil on canvas 16in x 20in"
    },
    {
      "piece":
        "/assets/paintings/littlegirl.jpeg",
      "description": "oil on canvas 18in x 24in"
    }
  ]
  people = [
    {
      "piece":
        "/assets/paintings/nudeselfie.jpeg",
      "description": "oil on canvas 30in x 40in"
    }, {
      "piece":
        "/assets/paintings/couple.jpeg",
      "description": "oil on canvas 18in x 24in"
    }
  ];

  ngOnInit() {
  }

  lightbox($event) {
    const srcPath = $event.path[0].src
    const imageName = srcPath.split("assets")[1]
    this.selectedImage = "/assets" + imageName
  }

  exitLightbox() {
    this.selectedImage = ""
  }
}

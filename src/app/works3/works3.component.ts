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
      "title": "Green Birdwing",
      "piece":
        "/assets/contemporary/green_birdwing_1.jpg",
      "description": "oil on canvas 30in x 40in"
    },
    {
      "title": "Adriandolo III",
      "piece":
        "/assets/contemporary/sunset_moth_3.jpg",
      "description": "oil on canvas 36in x 48in"
    },
    {
      "title": "Adriandolo II",
      "piece":
        "/assets/contemporary/sunset_moth_1.jpg",
      "description": "oil on canvas 36in x 48in"
    }, {
      "title": "Adriandolo I",
      "piece":
        "/assets/contemporary/sunset_moth_2.jpg",
      "description": "oil on canvas 24in x 36in"
    }]
  parents = [
    {
      "title": "Singing Our Peace",
      "piece":
        "/assets/paintings/singingourpeace.PNG",
      "description": "oil on canvas 36in x 48in"
    }]
  street_art = [
    {
      "title": "Hope",
      "piece":
        "/assets/street_art/hope.JPG",
      "description": "spray paint on plywood 4ft x 6ft"
    },
    {
      "title": "Joelle",
      "piece":
        "/assets/street_art/joelle.JPG",
      "description": "spray paint on plywood 3ft x 4ft"
    }]
  dogs = [
    {
      "title": "Honey & Harley",
      "piece":
        "/assets/painting_commissions/honey_and_harley.jpg",
      "description": "oil on canvas 16in x 20in"
    },
    {
      "title": "Bella & Karma",
      "piece":
        "/assets/painting_commissions/bella_and_karma.jpg",
      "description": "oil on canvas 16in x 20in"
    },
    {
      "title": "Bear",
      "piece":
        "/assets/painting_commissions/bear.jpg",
      "description": "oil on canvas 11in x 14in"
    },
    {
      "title": "Sandy & Arya",
      "piece":
        "/assets/paintings/dogs.jpeg",
      "description": "oil on canvas 18in x 24in"
    }]
  cities = [
    {
      "title": "18 N. Moore Street",
      "piece":
        "/assets/painting_commissions/18NMoore.jpg",
      "description": "oil on canvas 11in x 14in"
    },
    {
      "title": "Window in Paris",
      "piece":
        "/assets/paintings/windowinparis.jpeg",
      "description": "oil on canvas 4ft x 6ft"
    }]
  rural = [
    {
      "title": "The Farm",
      "piece":
        "/assets/paintings/farmhouse2.jpg",
      "description": "oil on canvas 24in x 30in"
    },
    {
      "title": "3121 Ashford Rd.",
      "piece":
        "/assets/paintings/redhouse.jpeg",
      "description": "oil on canvas 36in x 48in"
    },
    {
      "title": "Leslie's Boat",
      "piece":
        "/assets/paintings/boats.jpeg",
      "description": "oil on canvas 18in x 24in"
    }]
  girls = [
    {
      "title": "Teddi",
      "piece":
        "/assets/painting_commissions/teddi.jpg",
      "description": "oil on canvas 16in x 20in"
    },
    {
      "title": "In Loving Memory",
      "piece":
        "/assets/paintings/littlegirl.jpeg",
      "description": "oil on canvas 18in x 24in"
    }
  ]
  people = [
    {
      "title": "Self-portrait (homage to Flandrin)",
      "piece":
        "/assets/paintings/nudeselfie.jpeg",
      "description": "oil on canvas 30in x 40in"
    }, {
      "title": "Love at Squire's Castle",
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

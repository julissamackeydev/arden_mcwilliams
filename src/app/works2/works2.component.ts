import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works2',
  templateUrl: './works2.component.html',
  styleUrls: ['./works2.component.css']
})
export class Works2Component implements OnInit {

  constructor() { }
  selectedImage = ""
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
    }]
    images2=[
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
      "/assets/paintings/famrhouse.jpeg",
      "description": "oil on canvas 18in x 24in"
    }]
    images3=[
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

  lightbox($event){
    const srcPath = $event.path[0].src
    const imageName = srcPath.split("assets")[1]
    this.selectedImage = "/assets" + imageName
  }

  exitLightbox(){
    this.selectedImage=""
  }
}

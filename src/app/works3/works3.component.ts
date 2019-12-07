import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works3',
  templateUrl: './works3.component.html',
  styleUrls: ['./works3.component.css']
})
export class Works3Component implements OnInit {

  constructor() { }
  selectedImage = ""
  images = [
    {
      "piece":
      "/assets/dogs.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/windowinparis.jpeg",
      "description": "oil on canvas 18in x 24in"
    }]
    images2=[
      {
        "piece":
        "/assets/redhouse.jpeg",
        "description": "oil on canvas 18in x 24in"
      }]
    images3=[
      {
        "piece":
        "/assets/littlegirl.jpeg",
        "description": "oil on canvas 18in x 24in"
      }]
    images4=[
    {
      "piece":
      "/assets/nudeselfie.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/farmhouse.jpeg",
      "description": "oil on canvas 18in x 24in"
    }]
    images5=[
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

  lightbox($event){
    const srcPath = $event.path[0].src
    const imageName = srcPath.split("assets")[1]
    this.selectedImage = "/assets" + imageName
  }

  exitLightbox(){
    this.selectedImage=""
  }
}

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
    }]
    images2=[
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
    }]
    images3=[
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

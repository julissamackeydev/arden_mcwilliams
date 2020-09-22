import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works3',
  templateUrl: './works3.component.html',
  styleUrls: ['./works3.component.css']
})
export class Works3Component implements OnInit {

  constructor() { }
  selectedImage = ""
  imagesZ =[
    {
      "piece":
      "/assets/contemporary/green_birdwing_1.jpg",
      "description": "oil on canvas 36in x 48in"
    },
    {
      "piece":
      "/assets/contemporary/sunset_moth_3.jpg",
      "description": "oil on canvas 36in x 48in"
    },{
      "piece":
      "/assets/contemporary/sunset_moth_2.jpg",
      "description": "oil on canvas 24in x 36in"
    },
    {
      "piece":
      "/assets/contemporary/sunset_moth_1.jpg",
      "description": "oil on canvas 36in x 48in"
    }]
  images0= [
    {
    "piece":
    "/assets/paintings/singingourpeace.PNG",
    "description": "oil on canvas 36in x 48in"
  }]
  images1 = [
    {
      "piece":
      "/assets/paintings/dogs.jpeg",
      "description": "oil on canvas 18in x 24in"
    },
    {
      "piece":
      "/assets/paintings/windowinparis.jpeg",
      "description": "oil on canvas 4ft x 6ft"
    },
    {
      "piece":
      "/assets/paintings/littlegirl.jpeg",
      "description": "oil on canvas 18in x 24in"
    }]
    images2=[
      {
        "piece":
        "/assets/paintings/redhouse.jpeg",
        "description": "oil on canvas 36in x 48in"
      },{
        "piece":
        "/assets/paintings/nudeselfie.jpeg",
        "description": "oil on canvas 30in x 40in"
      }]
    images3=[
    {
      "piece":
      "/assets/paintings/farmhouse2.jpg",
      "description": "oil on canvas 24in x 30in"
    },
    {
      "piece":
      "/assets/paintings/couple.jpeg",
      "description": "oil on canvas 18in x 24in"
    },{
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

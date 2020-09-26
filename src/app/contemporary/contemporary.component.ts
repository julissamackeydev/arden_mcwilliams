import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contemporary',
  templateUrl: './contemporary.component.html',
  styleUrls: ['./contemporary.component.css']
})
export class ContemporaryComponent implements OnInit {

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

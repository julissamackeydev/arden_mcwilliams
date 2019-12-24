import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.css']
})
export class DrawingsComponent implements OnInit {

  constructor() { }
  selectedImage = ""
  images = [
    {
      "piece":
        "/assets/drawings/splayedout.jpg",
      "description": "pencil on canvas 18in x 24in"
    }, {
      "piece":
        "/assets/drawings/leaning.jpg",
      "description": "pencil on canvas 18in x 24in"
    },{
      "piece":
        "/assets/drawings/curledup.jpg",
      "description": "pencil on canvas 18in x 24in"
    },{
      "piece":
        "/assets/drawings/fountain.jpg",
      "description": "pencil on canvas 18in x 24in"
    }]
  images2 = [
    {
      "piece":
        "/assets/drawings/fountain.jpg",
      "description": "pencil on canvas 18in x 24in"
    }]
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

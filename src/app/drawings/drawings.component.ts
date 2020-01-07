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
      "description": "charcoal on paper"
    }, {
      "piece":
        "/assets/drawings/leaning.jpg",
      "description": "soft pastel on paper"
    },{
      "piece":
        "/assets/drawings/curledup.jpg",
      "description": "charcoal on paper"
    },{
      "piece":
        "/assets/drawings/fountain.jpg",
      "description": "mechanical pencil on paper"
    }]
  images2 = [
    {
      "piece":
        "/assets/drawings/fountain.jpg",
      "description": "mechanical pencil on paper"
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

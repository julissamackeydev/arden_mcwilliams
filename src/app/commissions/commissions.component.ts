import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.css']
})
export class CommissionsComponent implements OnInit {

  constructor() { }
  selectedImage = ""
  landscape_dogs = [
    {
      "piece":
        "/assets/painting_commissions/honey_and_harley.jpg",
      "description": "oil on canvas 16in x 20in"
    },
    {
      "piece":
        "/assets/painting_commissions/bella_and_karma.jpg",
      "description": "oil on canvas 16in x 20in"
    }]
    portrait_dogs=[
    {
      "piece":
        "/assets/painting_commissions/bear.jpg",
      "description": "oil on canvas 11in x 14in"
    },
    {
      "piece":
        "/assets/drawing_commissions/nellie_rose.jpg",
      "description": "soft pastel on paper 9in x 12in"
    },
    {
      "piece":
        "/assets/drawing_commissions/nellie_rose_pre_grooming.jpg",
      "description": "soft pastel on paper 9in x 11in"
    }]
  cities = [
    {
      "piece":
        "/assets/painting_commissions/18NMoore.jpg",
      "description": "oil on canvas 11in x 14in"
    },
  // ]
  // rural = [
  //   {
  //     "piece":
  //       "/assets/paintings/farmhouse2.jpg",
  //     "description": "oil on canvas 24in x 30in"
  //   },
  //   {
  //     "piece":
  //       "/assets/paintings/redhouse.jpeg",
  //     "description": "oil on canvas 36in x 48in"
  //   },
  //   {
  //     "piece":
  //       "/assets/paintings/boats.jpeg",
  //     "description": "oil on canvas 18in x 24in"
  //   }]
  // girls = [
    {
      "piece":
        "/assets/painting_commissions/teddi.jpg",
      "description": "oil on canvas 16in x 20in"
    }
  ]
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

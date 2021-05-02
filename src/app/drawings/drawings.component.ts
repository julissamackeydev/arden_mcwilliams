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
      "piece": "/assets/drawing_commissions/cat_in_charge.jpg",
      "description": "charcoal pencil and ink on canvas 12in x 12in"
    },
    {
      "piece": "/assets/drawing_commissions/cat_demure.jpg",
      "description": "charcoal pencil and ink on canvas 12in x 12in"
    },
    {
      "piece": "/assets/drawing_commissions/cat_relaxed.jpg",
      "description": "charcoal pencil and ink on canvas 12in x 12in"
    },
    {
      "piece": "/assets/drawing_commissions/cat_black_and_white.jpg",
      "description": "charcoal pencil and ink on canvas 12in x 12in"
    },
    {
      "piece": "/assets/drawing_commissions/cat_left_eye.jpg",
      "description": "charcoal pencil and ink on canvas 12in x 12in"
    },
    {
      "piece": "/assets/drawing_commissions/nellie_rose.jpg",
      "description": "soft pastel on paper 9in x 11in "
    },
    {
      "piece": "/assets/drawing_commissions/nellie_rose_pre_grooming.jpg",
      "description": "soft pastel on paper 9in x 12in "
    },
    {
      "piece": "/assets/drawings/baseball.jpg",
      "description": "soft pastel on paper"
    }
  ]
  images2 = [
    {
      "piece": "/assets/drawings/dog.jpg",
      "description": "soft pastel on paper"
    },
    {
      "piece": "/assets/drawings/abuela.jpg",
      "description": "soft pastel on paper"
    },{
      "piece":
        "/assets/drawings/fountain.jpg",
      "description": "mechanical pencil on paper"
    },
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
    }];
  // images3 = [
  //   {
  //     "piece":
  //       "/assets/drawings/fountain.jpg",
  //     "description": "mechanical pencil on paper"
  //   }];
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

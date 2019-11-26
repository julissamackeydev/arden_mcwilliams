import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }
  view = 0
  images = [
    "/assets/redhouse.jpeg",
    "/assets/littlegirl.jpeg",
    "/assets/dogs.jpeg",
    "/assets/nudeselfie.jpeg",
    "/assets/windowinparis.jpeg",
    "/assets/farmhouse.jpeg",
    "/assets/couple.jpeg",
    "/assets/boats.jpeg"
  ];
  ngOnInit() {
  }
  viewimage(event){

    if (this.view === 1){
      this.view = 0;
      return;
    }
    else{
      this.view = 1;
      return;
    }

  }
}

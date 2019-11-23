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
    "/assets/FullSizeRender.jpeg",
    "/assets/FullSizeRender-1.jpeg",
    "/assets/FullSizeRender-2.jpeg",
    "/assets/FullSizeRender-3.jpeg",
    "/assets/FullSizeRender-4.jpeg",
    "/assets/FullSizeRender-5.jpeg",
    "/assets/FullSizeRender-6.jpeg",
    "/assets/FullSizeRender-7.jpeg"
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

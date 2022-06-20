import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    rtl: true,
    navSpeed: 700,
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

}

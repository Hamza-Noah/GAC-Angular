import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  customOptions: OwlOptions = {
    rtl: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    center: true,
    responsive: {
      0: {
        nav: false,
        items: 1
      },
      400: {
        nav: false,
        items: 1
      },
      760: {
        nav: false,
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {

  customOptions: OwlOptions = {
    rtl: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    nav: false,

    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 5
      }
    },
  }
  constructor() { }

  ngOnInit(): void {
  }

}

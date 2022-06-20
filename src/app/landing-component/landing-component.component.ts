import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQRCodeModule, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss']
})
export class LandingComponentComponent implements OnInit {
  title = 'app';
  elementType = NgxQrcodeElementTypes.IMG;
  value = 'Techiediaries';
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH
 

  constructor() { }

  ngOnInit(): void {
  }

}

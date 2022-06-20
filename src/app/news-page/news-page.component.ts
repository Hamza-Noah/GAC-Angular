import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQRCodeModule, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent  {
  title = 'app';
  elementType = NgxQrcodeElementTypes.IMG;
  value = 'Techiediaries';
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH
 

}

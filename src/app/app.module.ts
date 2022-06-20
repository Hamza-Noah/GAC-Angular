import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { LandingComponent } from './landing/landing.component';
import { NewsComponent } from './news/news.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FooterComponent } from './footer/footer.component';
import { LinksComponent } from './links/links.component';
import { AdsComponent } from './ads/ads.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { MediaMenuComponent } from './media-menu/media-menu.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { MainPageComponent } from './main-page/main-page.component';
import { NewComponent } from './new/new.component';
import { CommissionComponent } from './commission/commission.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { SystemsComponent } from './systems/systems.component';
import { UpperbarComponent } from './upperbar/upperbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProceduresComponent,
    LandingComponent,
    NewsComponent,
    StatisticsComponent,
    FooterComponent,
    LinksComponent,
    AdsComponent,
    NotFoundComponent,
    NewsPageComponent,
    MediaMenuComponent,
    MainPageComponent,
    NewComponent,
    CommissionComponent,
    LandingComponentComponent,
    SystemsComponent,
    UpperbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule,
    NgxQRCodeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

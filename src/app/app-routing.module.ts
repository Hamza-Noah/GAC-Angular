import { NewComponent } from './new/new.component';
import { SystemsComponent } from './systems/systems.component';
import { CommissionComponent } from './commission/commission.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'main', component: MainPageComponent },
  { path: 'newsPage', component: NewsPageComponent },
  { path: 'commision', component: CommissionComponent },
  { path: "systems", component: SystemsComponent },
  {path: "new", component: NewComponent},
  { path: '', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

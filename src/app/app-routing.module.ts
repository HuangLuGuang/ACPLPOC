import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Demo01Component} from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';

const routes: Routes = [
  {path: 'demo01', component: Demo01Component},
  {path: 'demo02', component: Demo02Component},
  {path: 'demo03', component: Demo03Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

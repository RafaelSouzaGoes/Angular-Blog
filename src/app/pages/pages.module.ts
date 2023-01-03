import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component'


@NgModule({
  declarations: [
    HomeComponent,
    ContentComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import { NgxMaskModule } from 'ngx-mask';
import { AngularCropperjsModule } from 'angular-cropperjs';

// Ng-select
import { NgSelectModule } from '@ng-select/ng-select';

/**import components*/
import { ViewComponent } from './view/view.component';
import { CardComponent } from './view/card/card.component';
import { FilterPipe } from './pipes/filter.pipe';


const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
  }
];

@NgModule({
  declarations: [ViewComponent, CardComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgxMaskModule.forRoot({ validation: true }),
    AngularCropperjsModule,
  ],
})
export class EmployeesModule {}

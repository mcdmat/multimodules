import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './components/feature/list/list.component';
import { CardComponent } from './components/ui/card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }

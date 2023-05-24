import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LogicComponent } from './components/feature/logic/logic.component';
import { CardComponent } from './components/ui/card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    LogicComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }

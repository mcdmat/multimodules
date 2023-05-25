import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LogicComponent } from './components/feature/logic/logic.component';
import { ModsharedModule } from '../../shared/modshared/components/card/modshared.module';
// import { CardComponent } from 'src/app/shared/modshared/components/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    LogicComponent,
    // CardComponent
  ],
  imports: [CommonModule, AccountRoutingModule, ModsharedModule],
})
export class AccountModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './components/feature/list/list.component';
import { ModsharedModule } from '../../shared/modshared/components/card/modshared.module';
// import { CardComponent } from 'src/app/shared/modshared/components/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    // CardComponent
  ],
  imports: [CommonModule, AdminRoutingModule, ModsharedModule],
})
export class AdminModule {}

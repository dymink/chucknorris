import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { EuDatePipe } from './pipes/eu-date.pipe';
import { DetailsRoutingModule } from 'src/app/details/details-routing.module';

@NgModule({
  declarations: [DetailsComponent, EuDatePipe],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }

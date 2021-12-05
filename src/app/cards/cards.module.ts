import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { MultiCardsComponent } from './multi-cards/multi-cards.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CardsComponent,
    MultiCardsComponent

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule
  ],
  exports:[
    CardsComponent,
    MultiCardsComponent
  ]
})
export class CardsModule { }

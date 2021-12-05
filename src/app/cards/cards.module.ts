import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { MultiCardsComponent } from './multi-cards/multi-cards.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    CardsComponent,
    MultiCardsComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    CardsComponent,
    MultiCardsComponent
  ]
})
export class CardsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { MultiCardsComponent } from './multi-cards/multi-cards.component';



@NgModule({
  declarations: [
    CardsComponent,
    MultiCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardsComponent,
    MultiCardsComponent
  ]
})
export class CardsModule { }

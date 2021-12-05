import { Component, OnInit } from '@angular/core';
import { CardFormat } from '../interfaces/card.interface';

@Component({
  selector: 'app-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.css']
})
export class MultiCardsComponent implements OnInit {

  cardNumbers: number[] = [5,6,7,8,9,10,11,12];

  cards: CardFormat[] = [];
  numberCards: any[] = [];


  constructor() {

  }

  ngOnInit(): void {

    this.objectCard();
  }

  objectCard(){
    this.cards = [];
    this.cardNumbers.forEach((numberCard) =>{
      const coupleCard: CardFormat = {
        number: numberCard,
        state: 'default'
      };

      this.cards.push({...coupleCard});
      this.cards.push({...coupleCard});
    });

    this.cards = this.mixCards(this.cards);

  }

  mixCards(arrayCards: any[]): any[] {

    return arrayCards.sort(() => Math.random() - 0.5);

  }


  takeCard(index: number){

    let cardflipped = this.cards[index];
    console.log(cardflipped)

    if (cardflipped.state === 'default' && this.numberCards.length < 2)
    {
      cardflipped.state = 'flipped';
      this.numberCards.push(cardflipped);

      if (this.numberCards.length === 2) {
        // hacer la comparacion
     }

    } else if (cardflipped.state === 'flipped') {
      cardflipped.state = 'default';
      this.numberCards.pop();

    }

  };


}

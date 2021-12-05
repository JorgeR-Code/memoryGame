import { Component, OnInit } from '@angular/core';
import { CardFormat } from '../interfaces/card.interface';
import { PrimeNGConfig } from "primeng/api";
import {ConfirmationService} from 'primeng/api';


@Component({
  selector: 'app-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.css']
})
export class MultiCardsComponent implements OnInit {

  display: boolean = false;

  cardNumbers: number[] = [5,6,7,8,9,10,11,12];

  cards: CardFormat[] = [];
  numberCards: any[] = [];
  cardsOk: number = 0;


  constructor(private primeNGConfig: PrimeNGConfig, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {

    this.primeNGConfig.ripple = true;

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
        this.checkForCardMatch();
     }

    } else if (cardflipped.state === 'flipped') {
      cardflipped.state = 'default';
      this.numberCards.pop();

    }

  };

  checkForCardMatch(): void {
    setTimeout(() => {
      const card1 = this.numberCards[0];
      const card2 = this.numberCards[1];
      const compare = card1.number === card2.number ? 'matched' : 'default';
      card1.state = compare;
      card2.state = compare;

      this.numberCards = [];

      if (compare === 'matched') {
        this.cardsOk++;
        card1.state = 'flipped';
        card2.state = 'flipped';
        this.numberCards = [];

        if (this.cardsOk === this.cardNumbers.length) {
         this.confirm()
        }
      }

    }, 1000);
  }

  reset(){
    this.objectCard();
  }


  confirm() {
    this.confirmationService.confirm({
      key: 'win',
      accept: () => {
          console.log('winner')
      }
  });
}
}




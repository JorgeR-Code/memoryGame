import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardFormat } from '../interfaces/card.interface';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { ImageNumbersService } from 'src/app/services/images.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('400ms')
      ])
    ])
  ]

})
export class CardsComponent implements OnInit {

  images: boolean = false;

  @Input() data: CardFormat= {
    number: 0,
    state: "default"
  };


  @Output() takeCard = new EventEmitter();

  constructor(private changeTemplate:ImageNumbersService) { }

  ngOnInit(): void {

    this.changeTemplate.customTemplate.subscribe(imgNum => this.images = imgNum);
  }


}

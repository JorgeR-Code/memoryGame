import { Component, EventEmitter, Input, OnInit, Output,ViewChild } from '@angular/core';
import {ConfirmationService, PrimeNGConfig} from 'primeng/api';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit{

  @ViewChild(TimerComponent) childTimer!: TimerComponent;

  @Input() cardsOk: number = 0;
  @Input() cardNumbers: number[] = [];

  @Output() reset = new EventEmitter();

  closeable: boolean = false;

  constructor(private primeNGConfig: PrimeNGConfig ,private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
    this.startGame();
  }

  clock(time: number){

    if (time === 0 && this.cardsOk !== this.cardNumbers.length){
      this.tryAgain();
    }
    if(this.cardsOk === this.cardNumbers.length && time !==0){
      this.confirm();
    }
  }

  startGame(){
    this.confirmationService.confirm({
      key: 'start',
      rejectVisible: false,
      accept: () => {
        this.childTimer.startTimer();
      }
  });
  }

  confirm() {
    this.confirmationService.confirm({
      key: 'win',
      rejectVisible: false,
      accept: () => {
          this.resetAll();
      }
  });
}

tryAgain() {
  this.confirmationService.confirm({
    key: 'defeat',
    rejectVisible: false,
    accept: () => {
        this.resetAll();
    }
});
}

resetAll(){
  this.reset.emit();
  this.childTimer.resetTime();
}


pause(){
this.childTimer.pauseTime();
this.confirmationService.confirm({
  key: 'pause',
  rejectVisible: false,
  accept: () => {
    this.childTimer.startTimer();
  }
});
}

}

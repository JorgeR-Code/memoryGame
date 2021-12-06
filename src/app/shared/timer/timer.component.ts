import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Output() timeOut: EventEmitter<number> = new EventEmitter();

  timer: number = 100;
  interval: any = 0;
  constructor() { }

  ngOnInit(): void {

  }



startTimer() {
    this.interval = setInterval(() => {
      if(this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.interval);
      }
      this.timeOut.emit(this.timer);

    },1000)
  }


  resetTime(){
    this.timer = 100;
    clearInterval(this.interval);
    this.startTimer();
  }

  pauseTime(){
    clearInterval(this.interval);
  }
}

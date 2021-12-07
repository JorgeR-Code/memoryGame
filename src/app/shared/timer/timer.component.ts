import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChangeTimeService } from 'src/app/services/timeChange.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Output() timeOut: EventEmitter<number> = new EventEmitter();

  timer: number = 100;
  maxTimer: number = 100;
  interval: any = 0;

  constructor(private changeTime: ChangeTimeService) { }

  ngOnInit(): void {
    this.changeTime.customTimer.subscribe(tm => this.timer = tm );
    this.changeTime.customTimer.subscribe(tm => this.maxTimer = tm );

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
    this.changeTime.customTimer.subscribe(tm => this.timer = tm );
    clearInterval(this.interval);
    this.startTimer();
  }

  pauseTime(){
    clearInterval(this.interval);
  }
}

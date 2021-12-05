import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timer: number = 100;
  interval: any = 0;
  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }



startTimer() {
    this.interval = setInterval(() => {
      if(this.timer > 0) {
        this.timer--;
        console.log(this.timer);
      } else {
        this.timer = 100;
      }
    },1000)
  }
}

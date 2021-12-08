import {  Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageNumbersService } from 'src/app/services/images.service';
import { ChangeTimeService } from 'src/app/services/timeChange.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{

  @Output() level4F = new EventEmitter();
  @Output() level6F = new EventEmitter();


  timeCustom: number = 100;
  settings: boolean = false;
  disable: boolean = false;
  images: boolean = false;

  constructor(private changeTime: ChangeTimeService, private changeTemplate:ImageNumbersService ) { }

  ngOnInit(): void {

  }

  settingsFunc(){
    this.settings = true;
  }

  addTime(){
    this.timeCustom = this.timeCustom + 10;
    this.changeTime.changeTime(this.timeCustom);
    this.conditionDisable();

  }

  restTime(){

    if(this.timeCustom > 10){
      this.timeCustom = this.timeCustom - 10;
      this.changeTime.changeTime(this.timeCustom);
    }else{
      return
    }
    this.conditionDisable();

  }

  conditionDisable(){
    if(this.timeCustom === 10){
      this.disable = true;
    }else{
      this.disable = false;
    }
  }

  cardsImages(){
    this.images = true;
    this.changeTemplate.changeTemplate(this.images);
  }

  cardsNumbers(){
    this.images = false;
    this.changeTemplate.changeTemplate(this.images);

  }
}

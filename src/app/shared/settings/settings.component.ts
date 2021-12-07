import {  Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{

  @Output() level4F = new EventEmitter();
  @Output() level6F = new EventEmitter();



  settings: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  settingsFunc(){
    this.settings = true;
  }



}

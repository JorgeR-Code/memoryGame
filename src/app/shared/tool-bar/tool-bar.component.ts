import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ConfirmationService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {


  @Input() cardsOk: number = 0;
  @Input() cardNumbers: number[] = [];

  @Output() reset = new EventEmitter();

  closeable: boolean = false;


  constructor(private primeNGConfig: PrimeNGConfig ,private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;

  }


  confirm() {
    this.confirmationService.confirm({
      key: 'win',
      rejectVisible: false,
      accept: () => {
          this.reset.emit();
      }
  });
}

}

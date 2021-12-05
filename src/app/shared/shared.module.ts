import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ConfirmationService } from 'primeng/api';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ToolBarComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  exports:[
    ToolBarComponent
  ],
  providers: [ConfirmationService]
})
export class SharedModule { }

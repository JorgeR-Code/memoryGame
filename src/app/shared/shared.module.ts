import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ConfirmationService } from 'primeng/api';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { ChangeTimeService } from '../services/timeChange.service';
import { ImageNumbersService } from '../services/images.service';



@NgModule({
  declarations: [
    ToolBarComponent,
    TimerComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  exports:[
    ToolBarComponent,
    SettingsComponent
  ],
  providers: [
    ConfirmationService,
    ChangeTimeService,
    ImageNumbersService
  ]
})
export class SharedModule { }

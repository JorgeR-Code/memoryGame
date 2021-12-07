import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ConfirmationService } from 'primeng/api';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';



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
  providers: [ConfirmationService]
})
export class SharedModule { }

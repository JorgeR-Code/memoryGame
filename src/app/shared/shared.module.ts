import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  declarations: [
    ToolBarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    ToolBarComponent
  ],
  providers: [ConfirmationService]
})
export class SharedModule { }

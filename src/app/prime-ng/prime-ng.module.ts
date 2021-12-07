import { NgModule } from '@angular/core';
//PrimeNG
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {KnobModule} from 'primeng/knob';
import {SidebarModule} from 'primeng/sidebar';



@NgModule({
  exports:[
    ButtonModule,
    ToolbarModule,
    ConfirmDialogModule,
    KnobModule,
    SidebarModule

  ],
  providers: [ConfirmationService]
})
export class PrimeNgModule { }

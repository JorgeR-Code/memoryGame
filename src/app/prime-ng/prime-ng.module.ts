import { NgModule } from '@angular/core';
//PrimeNG
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';



@NgModule({
  exports:[
    ButtonModule,
    ToolbarModule,
    ConfirmDialogModule

  ],
  providers: [ConfirmationService]
})
export class PrimeNgModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { ChangeTimeService } from './services/timeChange.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    CardsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [ChangeTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

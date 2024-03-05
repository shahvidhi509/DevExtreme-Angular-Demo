import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxSelectBoxModule, DxPopoverModule } from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSelectBoxModule,
    DxPopoverModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

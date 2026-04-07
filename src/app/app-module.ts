import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout-module'
import { AppComponent } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeJngModule } from './core/theme/theme-jng.module';
import { RootStoreModule } from './root-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RootStoreModule,
    ThemeJngModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAgeComponent } from './components/add-age/add-age.component';
import { DisplayAgeComponent } from './components/display-age/display-age.component';
import { DisplayZodiacSignsComponent } from './components/display-zodiac-signs/display-zodiac-signs.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAgeComponent,
    DisplayAgeComponent,
    DisplayZodiacSignsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

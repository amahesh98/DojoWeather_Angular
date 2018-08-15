import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanJoseComponent,
    BurbankComponent,
    DallasComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

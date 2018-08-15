import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  weatherData:any
  constructor(private _httpService: HttpService){
    this.weatherData={}
  }
  getWeather(city:String){
    if(city=='seattle'){
      var cityObservable=this._httpService.seattle()
      cityObservable.subscribe(data=>{
        this.weatherData=data
      })
    }
  }
}

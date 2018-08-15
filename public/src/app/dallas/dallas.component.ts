import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weatherData:any
  constructor(private _httpService:HttpService) {
    this.weatherData={}
   }

  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
    var obs=this._httpService.dallas()
    obs.subscribe(data=>{
      this.weatherData=data
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  weatherData:any
  constructor(private _httpService:HttpService) { 
    this.weatherData={}
  }

  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
    var observable=this._httpService.sanJose()
    observable.subscribe(data=>{
      this.weatherData=data
    })
  }

}

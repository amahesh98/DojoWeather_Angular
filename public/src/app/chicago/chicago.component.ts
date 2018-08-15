import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weatherData:any
  constructor(private _httpService: HttpService) {
    this.weatherData={}
   }

  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
    var obs=this._httpService.chicago()
    obs.subscribe(data=>{
      this.weatherData=data
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weatherData:any
  constructor(private _httpService: HttpService) {
    this.weatherData={}
  }

  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
    var obs=this._httpService.burbank()
    obs.subscribe(data=>{
      this.weatherData=data
    })

  }

}

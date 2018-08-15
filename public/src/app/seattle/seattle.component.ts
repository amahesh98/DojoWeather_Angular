import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  @Input() weatherData:any
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
      var cityObservable=this._httpService.seattle()
      cityObservable.subscribe(data=>{
        this.weatherData=data
      })
  }

}

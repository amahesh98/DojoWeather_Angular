import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  seattle(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=52fc04884e88ff9bac1a0989f1654372&units=imperial')
  }
  sanJose(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Jose,us&APPID=52fc04884e88ff9bac1a0989f1654372&units=imperial')
  }
  burbank(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=burbank,us&APPID=52fc04884e88ff9bac1a0989f1654372&units=imperial')
  }
  dallas(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=dallas,us&APPID=52fc04884e88ff9bac1a0989f1654372&units=imperial')
  }
  chicago(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=chicago,us&APPID=52fc04884e88ff9bac1a0989f1654372&units=imperial')
  }
}

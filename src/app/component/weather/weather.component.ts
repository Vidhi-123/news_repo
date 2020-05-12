import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import dateFormat from 'dateFormat';
import { HttpClient  } from "@angular/common/http";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  info:Object;
  now =new Date();
  time:String;
  constructor(private weatherService:WeatherService,private http: HttpClient) { }
  apikey = '7e0bb977f9a5e9d6e76c14a70c74dac2';
  
  getInfo()
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=vadodara&appid='+this.apikey);
  }
  ngOnInit() {
    // this.weatherService.getInfo().subscribe(data => this.info=data);
    this.getInfo().subscribe(data=>this.info=data);
    this.time=this.now.getHours()+":"+this.now.getMinutes();
  }

}

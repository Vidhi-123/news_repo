import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NewsService } from "./service/news.service";
import { WeatherService} from "./service/weather.service";
import { BusinessComponent } from './component/business/business.component';
import { EntertainmentComponent } from './component/entertainment/entertainment.component';
import { GeneralComponent } from './component/general/general.component';
import { HealthComponent } from './component/health/health.component';
import { ScienceComponent } from './component/science/science.component';
import { SportsComponent } from './component/sports/sports.component';
import { TechnologyComponent } from './component/technology/technology.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './component/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [NewsService,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

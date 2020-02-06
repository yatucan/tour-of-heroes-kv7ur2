import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { ChildComponent } from './child/child.component';
import { FlowerService } from './flower.service';
import { AnimalService } from './animal.service';
import { InspectorComponent } from './inspector/inspector.component';
import { HeroTaxReturnComponent } from './hero-tax-return/hero-tax-return.component';
import { HeroTaxReturnService } from './hero-tax-return.service';
import { HeroesService } from './heroes.service';
import { HeroesListComponent } from './heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    ChildComponent,
    InspectorComponent,
    HeroTaxReturnComponent ,
    HeroesListComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [FlowerService, AnimalService, HeroTaxReturnService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

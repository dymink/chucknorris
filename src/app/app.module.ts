import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokesProviderFactory } from './jokes/factory/joke.provider.factory';
import { JokeService } from 'src/app/jokes/service/joke.service';
import { JokeResolve } from 'src/app/jokes/resolver/joke.resolver';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    JokeResolve,
    { provide: APP_INITIALIZER, useFactory: JokesProviderFactory, deps: [JokeService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

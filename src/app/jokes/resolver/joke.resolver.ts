import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Joke } from 'src/app/jokes/interface/joke';
import { JokeService } from 'src/app/jokes/service/joke.service';

@Injectable()
export class JokeResolve implements Resolve<Joke> {
  constructor(private jokeService: JokeService) {}
 
  resolve() {
    return this.jokeService.get();
  }
}
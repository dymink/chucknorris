import { JokeService } from './service/joke.service';
import { Joke } from './interface/joke';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  joke: Joke;

  constructor(private jokeService: JokeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.joke = this.route.snapshot.data['joke']
  }

  getJoke(){
    this.joke = this.jokeService.get();
  }

  onSkip(){
    this.jokeService.load()
      .then(() => {
        this.getJoke();
      })
  }

}

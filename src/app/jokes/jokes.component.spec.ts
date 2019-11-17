import { JokeService } from 'src/app/jokes/service/joke.service';
import { async,  } from '@angular/core/testing';
import { Spectator, createRoutingFactory } from '@ngneat/spectator';
import { JokesComponent } from './jokes.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('JokesComponent', () => {
  let spectator: Spectator<JokesComponent>;   
  const createComponent = createRoutingFactory({
    component:JokesComponent,
    detectChanges: false,
    mocks: [JokeService, RouterTestingModule],
    data: { joke: 'Chuck kills' }
  });

  beforeEach(() => spectator = createComponent());

  it('should create', async(() => {
    console.log(spectator)
    expect(spectator).toBeTruthy();
  }));

});

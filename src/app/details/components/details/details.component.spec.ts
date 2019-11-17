import { async, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { JokeService } from 'src/app/jokes/service/joke.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createRoutingFactory } from '@ngneat/spectator';
import { EuDatePipe } from 'src/app/details/pipes/eu-date.pipe';
import { Location } from '@angular/common';

describe('DetailsComponent', () => {
  let spectator: Spectator<DetailsComponent>;   
  const createComponent = createRoutingFactory({
    component:DetailsComponent,
    imports: [RouterTestingModule],
    declarations: [EuDatePipe],
    providers: [Location],
    detectChanges: false,
    mocks: [JokeService],
    data: { joke: 'Chuck kills' }
  });

  beforeEach(() => spectator = createComponent());

  it('should create', async(() => {
    expect(spectator).toBeTruthy();
  }));

  it('should back button trigger router', async() => {
    await spectator.fixture.whenStable();
    expect(spectator.get(Location).path()).toBe('/details');
    spectator.click('button');
    await spectator.fixture.whenStable();
    expect(spectator.get(Location).path()).toBe('/jokes'); 
  });
});




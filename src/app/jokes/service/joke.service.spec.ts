import { SpectatorHttp, createHttpFactory, HttpMethod, createServiceFactory, SpectatorService } from '@ngneat/spectator';  
import { JokeService } from './joke.service';  
import { async } from '@angular/core/testing';
  
describe('HttpClient testing', () => {  
  let spectator: SpectatorHttp<JokeService>;

  const createHttp = createHttpFactory(JokeService);  
 
  beforeEach(() => spectator = createHttp());  
 
  it('should retrieve joke from API', async(() => {
    spectator.service.load().then(() => {
        spectator.expectOne('load', HttpMethod.GET);
    });
  }));  
});

describe('Service method testing', () => {  
    let spectator: SpectatorService<JokeService>;
    const createService = createServiceFactory(JokeService);
    beforeEach(() => spectator = createService());
  
    it('should get', () => {
        spectator.service.get();
    });

    it('should load', () => {
        spectator.service.load();
    });
});
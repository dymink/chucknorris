import { JokeService } from './../service/joke.service';

export function JokesProviderFactory(provider: JokeService) {
    return () => provider.load();
}

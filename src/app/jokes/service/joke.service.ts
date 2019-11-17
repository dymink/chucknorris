import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Joke } from 'src/app/jokes/interface/joke';

@Injectable({providedIn: 'root'})
export class JokeService {
    private joke: Joke = null;
    constructor(private http: HttpClient) { }

    public load(){
        const url = 'https://api.chucknorris.io/jokes/random'
        return new Promise((resolve, reject) => {
            this.http
                .get(url)
                .subscribe((response: Joke) => {
                    this.joke = response;
                    resolve(true);
                })
        })
    }

    public get(){
        return this.joke;
    }

}
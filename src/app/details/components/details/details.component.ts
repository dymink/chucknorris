import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Joke } from 'src/app/jokes/interface/joke';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  joke: Joke;

  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.joke = this.route.snapshot.data['joke'];
  }

  onBack(){
    this.location.back();
  }

}

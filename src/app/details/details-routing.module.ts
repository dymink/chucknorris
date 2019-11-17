import { JokeResolve } from './../jokes/resolver/joke.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from 'src/app/details/components/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
    resolve: {joke: JokeResolve}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }

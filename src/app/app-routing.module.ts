import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesComponent} from './jokes/jokes.component'
import { JokeResolve } from 'src/app/jokes/resolver/joke.resolver';

const routes: Routes = [
  { path: 'jokes',
    component: JokesComponent,
    resolve: {joke: JokeResolve}
  },
  { path: 'details',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) 
  },
  {
    path: '',
    redirectTo: 'jokes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'Home', component: HomeComponent},
      {path: 'Movie/:id', component: MovieComponent},
      {path: 'Watchlist', component: WatchlistComponent},
      {path: '**', redirectTo: 'Home'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

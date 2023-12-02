import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MovieComponent } from './movie/movie.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { StylesModule } from '../styles/styles.module';


@NgModule({
  declarations: [
    MovieComponent,
    WatchlistComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    StylesModule
  ]
})
export class PagesModule { }

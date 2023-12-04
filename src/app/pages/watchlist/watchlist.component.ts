import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  public savedMovie: any[] = [];
  public image = '../../../assets/';
  
  private router = inject(Router);


  ngOnInit(): void {
    this.savedMovie = this.getSavedItems('savedMovies');
  }

  getSavedItems(path: string): any[] {
    const savedItems = JSON.parse(localStorage.getItem(path) || '[]');
    return savedItems;
  }

  removeSavedItem(index: number, path: string): void {
    const storage = this.getSavedItems(path);
    storage.splice(index, 1);
    localStorage.setItem(path, JSON.stringify(storage));
    this.savedMovie = storage;

    this.savedMovie = this.getSavedItems('savedMovies');
  }

  redirectMovie(id: number){
    this.router.navigate(['/pages/Movie/', id]);
  }
}

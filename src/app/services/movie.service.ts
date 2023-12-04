import { Injectable, inject } from '@angular/core';
import { enviroment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Movie } from '../interfaces/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movie: Movie[] = [];

  private readonly movieURL: string = enviroment.Url;
  private http = inject(HttpClient);


  constructor() { }

  searchMovie(Title: string): Observable<any> {
    return this.http.get(this.movieURL).pipe(
      map((data: any) => {
        const movie = data.find((movie: any) => movie.Title.toLowerCase() === Title.toLowerCase());
        return movie ? [movie] : [];
      })
    );
  }

  getAllMovies(): Observable<any> {
    return this.http.get(this.movieURL);
  }

  getById(id:number): Observable<any> {
    return this.http.get(this.movieURL).pipe(
      map((data: any) => {
        const movie = data.find((movie: any) => movie.id == id);
        return movie ? [movie] : [];
      })
    );
  }

  private isDarkMode = false;

  getIsDarkMode(): boolean {
    return this.isDarkMode;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}



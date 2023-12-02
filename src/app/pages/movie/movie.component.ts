import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private router = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  public moviId?: number;
  public image = '../../../assets/';
  public movie: Movie[] = [];
  public save!: boolean;

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.moviId = params['id'];

      const savedMovie = JSON.parse(localStorage.getItem('savedMovies') || '[]');

      const onThList = savedMovie.find((movieSaved: any) => movieSaved.id == this.moviId);
      onThList ? this.save = true : this.save = false;
      
      this.movieService.getById(this.moviId!).subscribe((resp) => {
        this.movie = resp;
      })
    })
  }

  addToFavorite(Movie: any) {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    savedMovies.push(Movie);
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
    this.save = true;
  }


}

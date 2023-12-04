import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public movies:Movie[] = [];
  public searchQuery: string = '';
  public filteredMovie: Movie[] = [];
  public image = '../../../assets/';
  public sortType: 'title' | 'releasedDate' = 'title';
  public orderBy?: any;


  private router = inject(Router);
  private movieService = inject(MovieService);

  constructor() {}
  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((resp)=>{
      this.movies = resp;
    })
  }

  onSearchInputChange(event: any) {
    this.searchQuery = event.target.value.trim();
    console.log(this.searchQuery);
    this.movieService.searchMovie(this.searchQuery).subscribe((resp) => {
      console.log(resp);
      this.filteredMovie = resp;
      console.log(this.filteredMovie);
    });  
  }

  redirectMovie(id: number){
    this.router.navigate(['/pages/Movie/', id]);
  }

  addToFavorite(Movie: any){
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    savedMovies.push(Movie);
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }
  
  isSave(id:any){
    const savedMovie = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    let save: boolean = false
    const onThList = savedMovie.find((movieSaved: any) => movieSaved.id == id);
    onThList ? save = true : save = false;
    return save
  }
}

import { Component, inject } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoviesApp';

  private themeService = inject(MovieService);

  getIsDarkMode(): boolean {
    return this.themeService.getIsDarkMode();
  }
 
}

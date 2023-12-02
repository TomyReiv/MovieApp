import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(movies: Movie[], sortBy: string | null): Movie[] {
    switch (sortBy) {
      case "Title A-Z":
        return movies.sort((a, b) => (a.Title! > b.Title!) ? 1 : -1);
      case "Title Z-A":
        return movies.sort((a, b) => (a.Title! < b.Title!) ? 1 : -1);
      case "ReleasedDate":
        return movies.sort((a, b) => {
          const dateA = new Date(a.ReleasedDate!);
          const dateB = new Date(b.ReleasedDate!);
          return dateB.getTime() - dateA.getTime();
        });
      default:
        return movies;
    }
  }
}

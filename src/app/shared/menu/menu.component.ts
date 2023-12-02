import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  private router = inject(Router);

  redirectMyList(){
    this.router.navigate(['/pages/Watchlist']);
  }
  redirectHome(){
    this.router.navigate(['/pages/Home']);
  }
}

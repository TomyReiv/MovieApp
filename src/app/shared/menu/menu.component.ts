import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  private router = inject(Router);
  private themeService = inject(MovieService);


  redirectHome(){
    this.router.navigate(['/pages/Home']);
  }

 
  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: '/pages/Home'
        },
        {
            label: 'My list',
            icon: 'pi pi-fw pi-ticket',
            routerLink: '/pages/Watchlist'
        },
    ];
}
}

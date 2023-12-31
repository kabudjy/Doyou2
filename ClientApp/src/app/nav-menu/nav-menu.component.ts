import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  isAuthenticated = false;
  isAdmin = false;

  constructor(private authorizeService: AuthorizeService) { }

  ngOnInit() {
    this.checkAuthentication();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  checkAuthentication() {
    this.authorizeService.isAuthenticated().subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
      },
      (error) => {
        console.error('Utilizador não autenticado', error);
      }
    );
  }

}

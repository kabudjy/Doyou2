import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService } from'../api.service'

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}




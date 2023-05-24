import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  list!: User[];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.apiService.getAll().subscribe(users => this.list = users);
  }
}

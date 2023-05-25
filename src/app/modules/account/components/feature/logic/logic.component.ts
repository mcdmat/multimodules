import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css'],
})
export class LogicComponent {
  user!: User;
  userID!: number;
  list!: User[];
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userID = +params['userID'];
    });
    this.getAllUsers();
  }
  getAllUsers() {
    this.apiService.getAll().subscribe((users) => {
      const foundUser = users.find((u) => u.id === this.userID);
      if (foundUser) {
        this.user = foundUser;
      }
    });
  }
}

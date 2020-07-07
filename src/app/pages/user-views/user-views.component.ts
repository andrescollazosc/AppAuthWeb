import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserViewModel } from '../../models/user-view.model';

@Component({
  selector: 'app-user-views',
  templateUrl: './user-views.component.html',
  styleUrls: ['./user-views.component.scss'],
})
export class UserViewsComponent implements OnInit {
  public userItems: UserViewModel[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsers().subscribe((result) => {
      this.userItems = result;
    });
  }
}

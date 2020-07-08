import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserViewModel } from '../../models/user-view.model';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {
  @Input() userModel: UserViewModel;

  @Output() resultEmit = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public onClickFirstButtom(): void {
    this.resultEmit.emit(true);
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserViewModel } from '../../models/user-view.model';
import { finalize } from "rxjs/operators";
import { HeaderPagesModel } from '../../models/header-pages.model';
import { LabelsConstants } from '../../constants/labels.constans';
import { RouterModel } from '../../constants/route.model';

@Component({
  selector: 'app-user-views',
  templateUrl: './user-views.component.html',
  styleUrls: ['./user-views.component.scss'],
})
export class UserViewsComponent implements OnInit {
  public userItems: UserViewModel[] = [];
  public isLoading = true;
  public configHeader: HeaderPagesModel;

  private LABELS = { ...LabelsConstants.USER_VIEWS };
  private ROUTE = { ...RouterModel.ROUTES };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.initializeData();
  }

  public variableTest(test: boolean): void {
    if (test) {
      alert('Hola muchachos');
    }  
  }

  private initializeData(): void {
    this.configHeaderPage();
    this.getUsers();
  }

  private configHeaderPage(): void {
    this.configHeader = {
      title: this.LABELS.TITLE_HEADER,
      labelButtom: this.LABELS.LABEL_BUTTOM_HEADER,
      route: `/${ this.ROUTE.SIGN_UP }`
    };
  }

  private getUsers(): void {
    this.userService.getUsers()
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe((result) => {
      this.userItems = result;
    }, error => {
      console.log(error);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { HeaderPagesModel } from '../../models/header-pages.model';
import { LabelsConstants } from '../../constants/labels.constans';
import { RouterModel } from '../../constants/route.model';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  public configHeader: HeaderPagesModel;

  private LABELS = { ...LabelsConstants.USER_SAVE };
  private ROUTE = { ...RouterModel.ROUTES };

  constructor() { }

  ngOnInit(): void {
    this.configHeaderPage();
  }

  private configHeaderPage(): void {
    this.configHeader = {
      title: this.LABELS.TITLE_HEADER,
      labelButtom: this.LABELS.LABEL_BUTTOM_HEADER,
      route: `/${ this.ROUTE.USERS }`
    };
  }

}

import { Component, OnInit } from '@angular/core';
import { HeaderPagesModel } from '../../models/header-pages.model';
import { LabelsConstants } from '../../constants/labels.constans';
import { RouterModel } from '../../constants/route.model';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { GenericFunctionUtil } from '../../utils/generic-functions.util';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements OnInit {
  public userForm: FormGroup;
  public configHeader: HeaderPagesModel;

  private LABELS = { ...LabelsConstants.USER_SAVE };
  private ROUTE = { ...RouterModel.ROUTES };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeData();
  }

  get validateUserName() {
    return (
      this.userForm.get('userName').invalid &&
      this.userForm.get('userName').touched
    );
  }

  public getErrors(controlName: string): string {
    let error = '';
    const control = this.userForm.get(controlName);

    // if (control.invalid && control.touched) {
    //   error = JSON.stringify(control.errors);
    // }

    if (control.errors == null) {
      return '';
    }

    return GenericFunctionUtil.validateField(control);
  }

  public saveUser(): void {
    // TO DO: Falta por terminar
    this.validateControls();

    // console.log(this.userForm);
  }

  private validateControls(): void {
    if (this.userForm.invalid) {
      return Object.values(this.userForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }

  private initializeData(): void {
    this.configHeaderPage();
    this.createForm();
  }

  private configHeaderPage(): void {
    this.configHeader = {
      title: this.LABELS.TITLE_HEADER,
      labelButtom: this.LABELS.LABEL_BUTTOM_HEADER,
      route: `/${this.ROUTE.USERS}`,
    };
  }

  private createForm(): void {
    this.userForm = this.formBuilder.group({
      // profile: ['', [Validators.minLength(1)]],
      userType: ['', [Validators.required, Validators.minLength(1)]],
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(20), Validators.email ]],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HeaderPagesModel } from '../../models/header-pages.model';
import { LabelsConstants } from '../../constants/labels.constans';
import { RouterModel } from '../../constants/route.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericFunctionUtil } from '../../utils/generic-functions.util';
import { UserSignUpModel } from '../../models/user-singup.model';
import { UserService } from '../../services/user.service';
import { ProfilesService } from '../../services/profiles.service';
import { UserTypeService } from '../../services/user-type.service';
import { ProfileModel } from '../../models/profile.model';
import { UserTypeModel } from '../../models/user-type.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements OnInit {
  // public attrubutes
  public userForm: FormGroup;
  public configHeader: HeaderPagesModel;
  public profileItem: ProfileModel[] = [];
  public userTypeItem: UserTypeModel[] = [];
  public isLoading = true;

  // private attributes
  private LABELS = { ...LabelsConstants.USER_SAVE };
  private ROUTE = { ...RouterModel.ROUTES };

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private profilesService: ProfilesService,
    private userTypeService: UserTypeService
  ) {}

  ngOnInit(): void {
    this.initializeData();
  }

  // TO DO: Se debe eliminar
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

    // if (control.errors == null) {
    //   return '';
    // }

    return GenericFunctionUtil.validateField(control);
  }

  public onSubmit(): void {
    this.validateControls();
  }

  private validateControls(): void {
    if (this.userForm.invalid) {
      return Object.values(this.userForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    } else {
      this.saveUser();
    }
  }

  private saveUser(): void {
    const user: UserSignUpModel = this.userForm.value;
    user.id = 0;
    user.profileId = Number(user.profileId);
    user.userTypeId = Number(user.userTypeId);

    this.userService.saveUser(user).subscribe((result) => {
      console.log(result);
    });
  }

  private initializeData(): void {
    this.configHeaderPage();
    this.createForm();
    this.loadProfiles();
    this.loadUserTypes();
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
      profileId: ['', [Validators.required]],
      userTypeId: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: [
        '',
        [Validators.required, Validators.minLength(20), Validators.email],
      ],
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

  private loadProfiles(): void {
    this.profilesService.getProfiles()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (result) => {
          this.profileItem = result;
        },
        (error) => {
          // codigo para controlar el error
        }
      );
  }

  private loadUserTypes(): void {
    this.userTypeService.getUserTypes()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (result) => {
          this.userTypeItem = result;
          console.log(this.userTypeItem);
        },
        (error) => {
          // codigo para controlar el error
        }
      );
  }
}

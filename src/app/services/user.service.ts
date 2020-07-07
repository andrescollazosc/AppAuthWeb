import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserViewModel } from '../models/user-view.model';
import { ApiUrlConstans } from '../constants/api-url.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private API = { ...ApiUrlConstans.API_URL }
  private URL_BASE = `${ environment.url_base }${ this.API.API_USER }`;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserViewModel[]> {
    return this.http.get<UserViewModel[]>(`${ this.URL_BASE }${ this.API.END_POINTS_USER.USERS }`);
  }

  public getUserById(id: number): Observable<UserViewModel> {
    return this.http.get<UserViewModel>(`${ this.URL_BASE }${ this.API.END_POINTS_USER.USER_BY_ID }${ id }`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserTypeModel } from '../models/user-type.model';
import { ApiUrlConstans } from '../constants/api-url.constants';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  private API = { ...ApiUrlConstans.API_URL.API_USER_TYPE }
  private URL_BASE = `${ environment.url_base }${ this.API.NAME }`;

  constructor(private http: HttpClient) { }

  public getUserTypes(): Observable<UserTypeModel[]> {
    return this.http.get<UserTypeModel[]>(`${ this.URL_BASE }${ this.API.END_POINTS.USER_TYPES }`);
  }

}

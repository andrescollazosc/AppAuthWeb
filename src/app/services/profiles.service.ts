import { Injectable } from '@angular/core';
import { ApiUrlConstans } from '../constants/api-url.constants';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  private API = { ...ApiUrlConstans.API_URL.API_PROFILE }
  private URL_BASE = `${ environment.url_base }${ this.API.NAME }`;

  constructor(private http: HttpClient) { }

  public getProfiles(): Observable<ProfileModel[]> {
    return this.http.get<ProfileModel[]>(`${ this.URL_BASE }${ this.API.END_POINTS.PROFILES }`);
  }
}

import { Injectable } from '@angular/core';
import { ApiUrlConstans } from '../constants/api-url.constants';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroViewModel } from '../models/hero-view.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private API = { ...ApiUrlConstans.API_URL }
  private URL_BASE = `${ environment.url_base }${ this.API.API_HERO.NAME }`;

  constructor(private http: HttpClient) { }

  public getHeros(): Observable<HeroViewModel[]> {
    return this.http.get<HeroViewModel[]>(`${ this.URL_BASE }${ this.API.API_HERO.END_POINTS.HEROS }`);
  }

  public getHeroById(id: string): Observable<HeroViewModel> {
    return this.http.get<HeroViewModel>(`${ this.URL_BASE }${ this.API.API_HERO.END_POINTS.HERO }/${ id }`);
  }

}

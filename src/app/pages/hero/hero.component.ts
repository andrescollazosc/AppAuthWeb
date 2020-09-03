import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { HeroViewModel } from '../../models/hero-view.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public hero: HeroViewModel;
  public isLoading = true;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.getHero();
  }

  private getHero(): void {
    const HERO_ID = this.activatedRoute.snapshot.params.id;

    this.heroService.getHeroById(HERO_ID)
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe(result => {
      this.hero = result;
    }, error => {
      console.log(error);      
    });
  }

}

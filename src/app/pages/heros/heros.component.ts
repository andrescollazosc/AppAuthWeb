import { Component, OnInit } from '@angular/core';
import { HeroViewModel } from '../../models/hero-view.model';
import { HeroService } from '../../services/hero.service';
import { finalize } from 'rxjs/operators';
import { ButtonCardModel } from '../../models/button-card.model';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  public heroItems: HeroViewModel[] = [
    {
      labelBtn: 'Ver...'
    }
  ];
  public configBtn: ButtonCardModel;
  public isLoad = true;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.getHeros();
    this.configButtonCard();
  }

  private configButtonCard(): void {
    this.configBtn = {
      labelBtn: 'Ver...',
      href: '/hero'
    };
  }

  private getHeros(): void {
    this.heroService.getHeros()
    .pipe(finalize(() => {
      this.isLoad = false;
    }))
    .subscribe(result => {
      this.heroItems = result;
    });
  }

}

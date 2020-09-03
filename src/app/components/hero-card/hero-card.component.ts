import { Component, OnInit, Input } from '@angular/core';
import { HeroViewModel } from '../../models/hero-view.model';
import { ButtonCardModel } from '../../models/button-card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: HeroViewModel;
  @Input() buttonConfig: ButtonCardModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initializeData();
  }

  public getImage(imageName: string): string {
    return `../../../assets/img${ imageName }`;
  }

  private initializeData(): void {
    this.configButton();
  }

  private configButton(): void {
    if (!this.buttonConfig) {
      this.buttonConfig = {
        labelBtn: 'Submit'
      };
    }
  }

  public onClick(action: string, id: string): void {
    this.router.navigate([action, { id: id }]);
  }

}

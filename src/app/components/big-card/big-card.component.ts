import { Component, OnInit, Input } from '@angular/core';
import { HeroViewModel } from '../../models/hero-view.model';
import { EditorialHouseEnum } from '../../enums/editorial-house.enum';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent implements OnInit {
  @Input() hero: HeroViewModel;

  constructor() {}

  ngOnInit(): void {}

  public getImage(imageName: string): string {
    return `../../../assets/img${imageName}`;
  }

  public getLogoEditorial(editorialId: EditorialHouseEnum): string {
    let logo: string;

    switch (editorialId) {
      case EditorialHouseEnum.dcComics:
        logo = 'dc-logo.png';
        break;
      case EditorialHouseEnum.marvelComics:
        logo = 'marvel-logo.png';
        break;
      default:
        break;
    }

    return `../../../assets/img/${logo}`;
  }
}

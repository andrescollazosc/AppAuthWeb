import { EditorialHouse } from './editorial-house';

export interface HeroViewModel {
  id?: string;
  editorialId?: number;
  heroName?: string;
  superHero?: string;
  yearOfAppearance?: number;
  history?: string;
  urlImage?: string;
  active?: boolean;
  editorial?: EditorialHouse;
  redirectToAction?: string;
  labelBtn?: string;
}

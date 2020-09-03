import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {

   public code : string = `if (variable) {
          // Implement your code
        }`;

  constructor() { }

  ngOnInit(): void {
  }

}

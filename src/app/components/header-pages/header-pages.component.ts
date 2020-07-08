import { Component, OnInit, Input } from '@angular/core';
import { HeaderPagesModel } from '../../models/header-pages.model';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.scss']
})
export class HeaderPagesComponent implements OnInit {

  @Input() configHeader: HeaderPagesModel;

  constructor() { }

  ngOnInit(): void {
    this.validateConfig();
  }

  public validateConfig(): void {
    if (!this.configHeader) {
      this.configHeader = {
        title: 'Title...',
        labelButtom: 'Buttom label'
      }
    }
  }

}

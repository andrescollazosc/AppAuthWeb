import { Component, OnInit, Input } from '@angular/core';
import { BigAlertModel } from '../../models/big-alert.model';

@Component({
  selector: 'app-big-alert',
  templateUrl: './big-alert.component.html',
  styleUrls: ['./big-alert.component.scss']
})
export class BigAlertComponent implements OnInit {

  @Input() 
  public bigAlertModel: BigAlertModel;

  constructor() { }

  ngOnInit(): void {
    if (!this.bigAlertModel) {
      this.bigAlertModel = {
        title: 'Titulo',
        alertType: "alert alert-success"
      };
    }
  }

}

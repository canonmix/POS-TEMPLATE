import { Component} from '@angular/core';

@Component({
  selector: 'app-blank-page',
  templateUrl: './template.component.html'
})
export class bestsellerComponent  {

  itemsRow = [1, 2, 3, 4];
  itemsBasic = [1, 2, 3, 4];
  itemsHandles = [1, 2, 3, 4];

  itemsUpdates = [1, 2, 3, 4];
  optionsUpdates = {};
  updates = [];

  constructor() {
    this.optionsUpdates = {
      onUpdate: (event: any) => {
        this.updates.push(this.itemsUpdates.slice());
      }
    };
  }

}

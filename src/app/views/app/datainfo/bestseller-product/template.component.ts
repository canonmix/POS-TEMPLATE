import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BestsellerAddnewPopupComponent } from '../../simple-popup/bestseller-addnew-popup.component';
import { BestsellerEditPopupComponent } from '../../simple-popup/bestseller-editinfo-popup.component';

@Component({
  selector: 'app-blank-page',
  templateUrl: './template.component.html',
  styleUrls: ['../bestseller/bestseller.component.scss'],
})
export class bestsellerProductComponent  {

  public inputData: any;
  public disabled: any;
  public labelPosition: any;
  public indeterminate: any;
  public checked: any;

  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  toppings = new FormControl();

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  constructor(public dialog: MatDialog) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
  }


  openDialog() {
    const dialogRef = this.dialog.open(BestsellerAddnewPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2() {
    const dialogRef = this.dialog.open(BestsellerEditPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

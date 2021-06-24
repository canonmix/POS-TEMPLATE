import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PosCashcheckPopupComponent } from './pos-cashcheck-popup.component';
import { PosTaxinvPopupComponent } from './pos-taxinv-popup.component';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './pos-complete-popup.component.html',
  styleUrls: ['./pos-complete-popup.component.scss'],
})
export class PosComplatePopupComponent {
  
  public inputData: any;
  public disabled: any;
  public AddnewPosition: any;
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

  openDialog2() {
    const dialogRef = this.dialog.open(PosCashcheckPopupComponent, {
      panelClass: 'conx-PosCashcheckPopup',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog3() {
    const dialogRef = this.dialog.open(PosTaxinvPopupComponent, {
      panelClass: 'conx-PosTaxinvPopup',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}

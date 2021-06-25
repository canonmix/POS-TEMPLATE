import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatainfoDiscountPopupComponent } from '../../simple-popup/datainfo-discount-popup.component';

@Component({
  selector: 'app-conxo',
  templateUrl: '../../datainfo/datainfo.component.html',
  styleUrls: ['../../datainfo/datainfo.component.scss'],
  // templateUrl: './conxo.component.html',
  // styleUrls: ['./conxo.component.scss'],
})
export class ConxoComponent {

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
    const dialogRef = this.dialog.open(DatainfoDiscountPopupComponent, {
      panelClass: 'conx-DatainfoDiscountPopup',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

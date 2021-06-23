import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BestsellerAddnewPopupComponent } from '../../simple-popup/bestseller-addnew-popup.component';

@Component({
  selector: 'app-blank-page',
  templateUrl: './template.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class posdataComponent  {

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

  paymentamount = '3,000.00';
  netamount = '3,000.00';
  perdiscount = '-0.00';
  amounttobepaid = '2,285.00';
  paidamount = '0.00';
  outstandingbalance = '0.00';
  cashreceived = '3,000.00';
  cashpayment = '2,285.00';
  cashchange = '715.00';
  creditpayment = '2,285.00';
  creditdetails = 'xxxxxx';

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
    const dialogRef = this.dialog.open(BestsellerAddnewPopupComponent, {
      panelClass: 'conx-BestsellerAddnewPopup',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

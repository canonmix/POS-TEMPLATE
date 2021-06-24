import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './pos-cashcheck-popup.component.html',
  styleUrls: ['./pos-cashcheck-popup.component.scss'],
})
export class PosCashcheckPopupComponent {
  
  public inputData: any;
  public disabled: any;
  public AddnewPosition: any;
  public indeterminate: any;
  public checked: any;

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
  
}

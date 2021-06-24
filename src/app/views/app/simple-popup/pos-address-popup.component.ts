import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './pos-address-popup.component.html',
  styleUrls: ['./pos-address-popup.component.scss'],
})
export class PosAddressPopupComponent {
  
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
  
}

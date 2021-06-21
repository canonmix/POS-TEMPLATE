import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './bestseller-addnew-popup.component.html',
  styleUrls: ['./bestseller-addnew-popup.component.scss'],
})
export class BestsellerAddnewPopupComponent {
  
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
  
}

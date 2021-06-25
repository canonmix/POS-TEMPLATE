import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { BlankPageComponent2 } from './blank-page2/blank-page2.component';
import { bestsellerComponent } from './datainfo/bestseller/template.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BestsellerAddnewPopupComponent } from './simple-popup/bestseller-addnew-popup.component';
import { bestsellerProductComponent } from './datainfo/bestseller-product/template.component';
import { bestsellerProductAddedComponent } from './datainfo/bestseller-product-added/template.component';
import { BestsellerEditPopupComponent } from './simple-popup/bestseller-editinfo-popup.component';
import { salereportComponent } from './datainfo/salereport/template.component';
import { posdataComponent } from './datainfo/pos/template.component';
import { PosComplatePopupComponent } from './simple-popup/pos-complete-popup.component';
import { PosCashcheckPopupComponent } from './simple-popup/pos-cashcheck-popup.component';
import { PosTaxinvPopupComponent } from './simple-popup/pos-taxinv-popup.component';
import { PosAddressPopupComponent } from './simple-popup/pos-address-popup.component';
import { PosNewAddressPopupComponent } from './simple-popup/pos-newaddress-popup.component';
import { datainfoComponent } from './datainfo/datainfo.component';
import { DatainfoDiscountPopupComponent } from './simple-popup/datainfo-discount-popup.component';
import { DatainfoChooseDiscountPopupComponent } from './simple-popup/datainfo-choosediscount-popup.component';
import { ConxoComponent } from './dashboards/conxo/conxo.component';

@NgModule({
  declarations: [
    BlankPageComponent,
    BlankPageComponent2,
    bestsellerComponent,
    AppComponent,
    SimplePopupComponent,
    BestsellerAddnewPopupComponent,
    bestsellerProductComponent,
    bestsellerProductAddedComponent,
    BestsellerEditPopupComponent,
    salereportComponent,
    posdataComponent,
    PosComplatePopupComponent,
    PosCashcheckPopupComponent,
    PosTaxinvPopupComponent,
    PosAddressPopupComponent,
    PosNewAddressPopupComponent,
    datainfoComponent,
    DatainfoDiscountPopupComponent,
    DatainfoChooseDiscountPopupComponent,
    ConxoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
  ],
  entryComponents: [
    BestsellerAddnewPopupComponent,
    bestsellerProductComponent,
    bestsellerProductAddedComponent,
    BestsellerEditPopupComponent,
    salereportComponent,
    posdataComponent,
    PosComplatePopupComponent,
    PosCashcheckPopupComponent,
    PosTaxinvPopupComponent,
    PosAddressPopupComponent,
    PosNewAddressPopupComponent,
    datainfoComponent,
    DatainfoDiscountPopupComponent,
    DatainfoChooseDiscountPopupComponent,
    ConxoComponent,
  ],
})
export class AppModule {}

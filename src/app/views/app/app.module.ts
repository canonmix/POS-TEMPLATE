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
  ],
})
export class AppModule {}

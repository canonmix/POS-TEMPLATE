import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { BlankPageComponent2 } from './blank-page2/blank-page2.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
// import { CustomerAddComponent } from './example-exiting-component/sale-page-create.component';
// import { datainfoComponent } from './datainfo/datainfo.component';
// import { BestSellerInfoComponent } from './datainfo/bestsellerinfo/bestsellerinfo.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BlankPageComponent, BlankPageComponent2, AppComponent, SimplePopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
  ],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { BlankPageComponent2 } from './blank-page2/blank-page2.component';
import { datainfoComponent } from './datainfo/datainfo.component';
import { bestsellerComponent } from './datainfo/bestseller/template.component';
import { bestsellerProductComponent } from './datainfo/bestseller-product/template.component';
import { bestsellerProductAddedComponent } from './datainfo/bestseller-product-added/template.component';
import { salereportComponent } from './datainfo/salereport/template.component';
import { posdataComponent } from './datainfo/pos/template.component';
import { ConxoComponent } from './dashboards/conxo/conxo.component';
import { ReceiptComponent } from './issued/receipt/template.component';
import { CompanyInfoComponent } from './issued/companyinfo/template.component';

// อิงจาก https://vien-docs.coloredstrategies.com/docs/codebase/routing ปรับ Router ของ Patch หลักที่นี่

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboards' },
      {
        path: 'dashboards',
        loadChildren: () =>
          import('./dashboards/dashboards.module').then(
            (m) => m.DashboardsModule
          ),
      },
      {
        path: 'applications',
        loadChildren: () =>
          import('./applications/applications.module').then(
            (m) => m.ApplicationsModule
          ),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui',
        loadChildren: () => import('./ui/ui.module').then((m) => m.UiModule),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./menu/menu.module').then((m) => m.MenuModule),
      },
      { path: 'blank-page', component: BlankPageComponent },
      { path: 'blank-page2', component: BlankPageComponent2 },
      { path: 'dashboards/conxo', component: ConxoComponent },
      { path: 'datainfo', component: datainfoComponent },
      { path: 'datainfo/bestseller', component: bestsellerComponent },
      { path: 'datainfo/bestseller/product', component: bestsellerProductComponent },
      { path: 'datainfo/bestseller/product/added', component: bestsellerProductAddedComponent },
      { path: 'datainfo/salereport', component: salereportComponent },
      { path: 'datainfo/pos', component: posdataComponent },
      { path: 'issued/receipt', component: ReceiptComponent },
      { path: 'issued/companyinfo', component: CompanyInfoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

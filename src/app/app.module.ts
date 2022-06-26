import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { InvoiceingSectionComponent } from './invoiceing-section/invoiceing-section.component';
import { CustomInvoiceComponent } from './custom-invoice/custom-invoice.component';
import { WorkableFeatureComponent } from './workable-feature/workable-feature.component';
import { AllBusinessComponent } from './all-business/all-business.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvoiceingSectionComponent,
    CustomInvoiceComponent,
    WorkableFeatureComponent,
    AllBusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

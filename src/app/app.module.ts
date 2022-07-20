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
import { InvoiceSolutionComponent } from './invoice-solution/invoice-solution.component';
import { ChooseBestComponent } from './choose-best/choose-best.component';
import { AccessInvoiceComponent } from './access-invoice/access-invoice.component';
import { PaymentGetwayComponent } from './payment-getway/payment-getway.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvoiceingSectionComponent,
    CustomInvoiceComponent,
    WorkableFeatureComponent,
    AllBusinessComponent,
    InvoiceSolutionComponent,
    ChooseBestComponent,
    AccessInvoiceComponent,
    PaymentGetwayComponent,
    TestimonialsComponent,
    FaqComponent,
    JoinUsComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

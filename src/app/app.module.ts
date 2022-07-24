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
import { AboutComponent } from './about/about.component';
import { SolutionComponent } from './solution/solution.component';
import { ServiceComponent } from './service/service.component';
import { OfferComponent } from './offer/offer.component';
import { ResourceComponent } from './resource/resource.component';
import { PluginsComponent } from './plugins/plugins.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SolutionForIndustryComponent } from './solution-for-industry/solution-for-industry.component';
import { SupplyChainManagementSystemComponent } from './supply-chain-management-system/supply-chain-management-system.component';
import { CustomEcommerceWebsiteComponent } from './custom-ecommerce-website/custom-ecommerce-website.component';
import { SanitrayManagementSystemComponent } from './sanitray-management-system/sanitray-management-system.component';

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
    HomeComponent,
    AboutComponent,
    SolutionComponent,
    ServiceComponent,
    OfferComponent,
    ResourceComponent,
    PluginsComponent,
    SolutionForIndustryComponent,
    SupplyChainManagementSystemComponent,
    CustomEcommerceWebsiteComponent,
    SanitrayManagementSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomEcommerceWebsiteComponent } from './custom-ecommerce-website/custom-ecommerce-website.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { PluginsComponent } from './plugins/plugins.component';
import { ResourceComponent } from './resource/resource.component';
import { SanitrayManagementSystemComponent } from './sanitray-management-system/sanitray-management-system.component';
import { ServiceComponent } from './service/service.component';
import { SolutionForIndustryComponent } from './solution-for-industry/solution-for-industry.component';
import { SolutionComponent } from './solution/solution.component';
import { SupplyChainManagementSystemComponent } from './supply-chain-management-system/supply-chain-management-system.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'about', component:AboutComponent},
  {path:'solution', component:SolutionComponent},
  {path:'offer', component:OfferComponent},
  {path:'service', component:ServiceComponent},
  {path:'resource', component:ResourceComponent},
  {path:'plugins', component:PluginsComponent},
  {path:'solutionForInd', component:SolutionForIndustryComponent},
  {path:'supplyChain', component:SupplyChainManagementSystemComponent},
  {path:'custom-ecommerce-website', component:CustomEcommerceWebsiteComponent},
  {path:'sanitary-Management-System', component:SanitrayManagementSystemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

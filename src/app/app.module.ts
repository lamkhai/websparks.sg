import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedHeaderComponent } from './components/shared/header/header.component';
import { SharedFooterComponent } from './components/shared/footer/footer.component';
import { SharedLayoutComponent } from './components/shared/layout/layout.component';

import { ModuleBannerComponent } from './components/modules/banner/banner.component';
import { ModuleAboutwebsparksComponent } from './components/modules/aboutwebsparks/aboutwebsparks.component';
import { ModuleOurservicesComponent } from './components/modules/ourservices/ourservices.component';
import { ModuleRecentprojectsComponent } from './components/modules/recentprojects/recentprojects.component';
import { ModuleContactusnowComponent } from './components/modules/contactusnow/contactusnow.component';
import { ModuleOurcultureComponent } from './components/modules/ourculture/ourculture.component';
import { ModuleWhywebsparksComponent } from './components/modules/whywebsparks/whywebsparks.component';
import { ModuleCorporatesocialresponsibilityComponent } from './components/modules/corporatesocialresponsibility/corporatesocialresponsibility.component';
import { ModuleContactformComponent } from './components/modules/contactform/contactform.component';
import { ModuleContactinfoComponent } from './components/modules/contactinfo/contactinfo.component';

import { PageHomeComponent } from './components/pages/home/home.component';
import { PageAboutComponent } from './components/pages/about/about.component';
import { PagePortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { PageServicesComponent } from './components/pages/services/services.component';
import { PageServicedetailComponent } from './components/pages/servicedetail/servicedetail.component';
import { PageCareersComponent } from './components/pages/careers/careers.component';
import { PageContactComponent } from './components/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedHeaderComponent,
    SharedFooterComponent,
    SharedLayoutComponent,
    ModuleBannerComponent,
    ModuleAboutwebsparksComponent,
    ModuleOurservicesComponent,
    ModuleRecentprojectsComponent,
    ModuleContactusnowComponent,
    ModuleOurcultureComponent,
    ModuleWhywebsparksComponent,
    ModuleCorporatesocialresponsibilityComponent,
    ModuleContactformComponent,
    ModuleContactinfoComponent,
    PageHomeComponent,
    PageAboutComponent,
    PagePortfolioComponent,
    PageServicesComponent,
    PageServicedetailComponent,
    PageCareersComponent,
    PageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
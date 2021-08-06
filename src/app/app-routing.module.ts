import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SharedLayoutComponent } from './components/shared/layout/layout.component';
import { PageHomeComponent } from './components/pages/home/home.component';
import { PageAboutComponent } from './components/pages/about/about.component';
import { PagePortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { PageServicesComponent } from './components/pages/services/services.component';
import { PageCareersComponent } from './components/pages/careers/careers.component';
import { PageContactComponent } from './components/pages/contact/contact.component';
import { PageServicedetailComponent } from './components/pages/servicedetail/servicedetail.component';

export const routes: Route[] = [
  {
      path: '', component: SharedLayoutComponent, children: [
          { path: '', component: PageHomeComponent, pathMatch: 'full' },
          { path: 'about-us', component: PageAboutComponent },
          { path: 'portfolio', component: PagePortfolioComponent },
          { path: 'services', component: PageServicesComponent },
          { path: 'careers', component: PageCareersComponent },
          { path: 'contact', component: PageContactComponent },
          { path: 'services-application-development', component: PageServicedetailComponent },
          { path: 'services-cms-implementation', component: PageServicedetailComponent },
          { path: 'services-cwp', component: PageServicedetailComponent },
          { path: 'services-project-managment', component: PageServicedetailComponent },
          { path: 'services-ui-ux', component: PageServicedetailComponent },
          { path: 'services-website-maintenance', component: PageServicedetailComponent }
      ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

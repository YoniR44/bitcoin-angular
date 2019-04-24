import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'contacts',
    children: [
      {
        path: '',
        component: ContactPageComponent
      },
      {
        path: 'add',
        component: ContactEditPageComponent,
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: ContactDetailsPageComponent,
          },
          {
            path: 'edit',
            component: ContactEditPageComponent,
          }
        ]
      },

    ]
  },
  {
    path: 'stats',
    component: StatisticPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

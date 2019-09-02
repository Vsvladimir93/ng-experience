import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StyleTryComponent } from './pages/style-try/style-try.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';


const appRoutes: Routes = [
  { path: 'style-try', component: StyleTryComponent },
  { path: 'campaigns', component: CampaignsComponent }
]

@NgModule({
  declarations: [
    StyleTryComponent,
    CampaignsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ]
})
export class AppRoutingModule { }

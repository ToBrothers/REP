import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { WhyRepComponent } from './About/why-rep/why-rep.component';
import { JoinRepComponent } from './About/join-rep/join-rep.component';
import { OurProfessionalsComponent } from './our-professionals/our-professionals.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { HomeEvaluationComponent } from './home-evaluation/home-evaluation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { OurProfessionalDetailComponent } from './our-professional-detail/our-professional-detail.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { LightgalleryModule } from 'lightgallery/angular/13';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    WhyRepComponent,
    JoinRepComponent,
    OurProfessionalsComponent,
    PropertySearchComponent,
    HomeEvaluationComponent,
    ContactUsComponent,
    HomePageComponent,
    PropertyDetailComponent,
    OurProfessionalDetailComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule, 
    NgImageSliderModule,
    LightgalleryModule,
    NgxPaginationModule
  ],
  exports: [
    WhyRepComponent, JoinRepComponent, OurProfessionalsComponent, PropertySearchComponent, HomeEvaluationComponent, ContactUsComponent, HomePageComponent
  ]
  // providers: [ ]
})
export class ViewsModule { }

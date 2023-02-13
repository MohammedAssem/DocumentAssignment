import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavberComponent } from './components/navber/navber.component';
import { HomeComponent } from './components/home/home.component';
import { BestMedicalComponent } from './components/best-medical/best-medical.component';
import { ExcellentComponent } from './components/excellent/excellent.component';
import { APPOINTMENTComponent } from './components/appointment/appointment.component';
import { PACKAGESComponent } from './components/packages/packages.component';
import { OURDOCTORSComponent } from './components/our-doctors/our-doctors.component';
import { TESTIMONIALComponent } from './components/testimonial/testimonial.component';
import { BLOGComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { HeroEndComponent } from './components/hero-end/hero-end.component';
import { ServicesComponent } from './components/services/services.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavberComponent,
    HomeComponent,
    BestMedicalComponent,
    ExcellentComponent,
    APPOINTMENTComponent,
    PACKAGESComponent,
    OURDOCTORSComponent,
    TESTIMONIALComponent,
    BLOGComponent,
    AboutComponent,
    HeroEndComponent,
    ServicesComponent,
    PricingComponent,
    NotfoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

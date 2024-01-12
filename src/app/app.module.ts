import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CoursecardComponent } from './components/courses/coursecard/coursecard.component';
import { CoursedetailsComponent } from './components/courses/coursedetails/coursedetails.component';
import { WishlistComponent } from './components/courses/wishlist/wishlist.component';

import { ButtonModule } from 'primeng/button';
import { NotfoundPageComponent } from './components/courses/notfound-page/notfound-page.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesListComponent,
    CoursecardComponent,
    CoursedetailsComponent,
    WishlistComponent,
    NotfoundPageComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

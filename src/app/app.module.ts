import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import {  PaginationService } from 'ngx-pagination';
import { CoursedetailsComponent } from './components/courses/coursedetails/coursedetails.component';
import { WishlistComponent } from './components/courses/wishlist/wishlist.component';

import { ButtonModule } from 'primeng/button';
import { NotfoundPageComponent } from './components/courses/notfound-page/notfound-page.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { SearchResultComponent } from './components/courses/search-result/search-result.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesListComponent,
    CoursedetailsComponent,
    WishlistComponent,
    NotfoundPageComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    BannerComponent,
    CustomFilterPipe,
    SearchResultComponent,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    NgxPaginationModule,
    
  ],
  providers: [PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

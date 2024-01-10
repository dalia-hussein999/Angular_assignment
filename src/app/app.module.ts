import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CoursecardComponent } from './components/courses/coursecard/coursecard.component';
import { CoursedetailsComponent } from './components/courses/coursedetails/coursedetails.component';
import { WishlistComponent } from './components/courses/wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesListComponent,
    CoursecardComponent,
    CoursedetailsComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

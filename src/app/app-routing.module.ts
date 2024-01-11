import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CoursedetailsComponent } from './components/courses/coursedetails/coursedetails.component';
import { WishlistComponent } from './components/courses/wishlist/wishlist.component';
import { NotfoundPageComponent } from './components/courses/notfound-page/notfound-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CartComponent } from './components/cart/cart/cart.component';

const routes: Routes = [
  {path : "" , component : CoursesListComponent},
  {path : "home" , component : CoursesListComponent},
  {path : "details" , component : CoursedetailsComponent},
  {path : "wishlist", component : WishlistComponent},
  {path : "login" , component : LoginComponent},
  {path : "register" , component : RegisterComponent},
  {path : "cart" , component : CartComponent},
  {path : "**", component : NotfoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

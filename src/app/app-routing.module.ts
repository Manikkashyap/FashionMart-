import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MensTshirtsComponent } from './mens-tshirts/mens-tshirts.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'tshirt',
    component:MensTshirtsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'userreg',
    component:RegisterComponent
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form', component: FormComponentComponent},
  {path: 'contact', component: ContactComponentComponent},
  {path: '**', component: ContactComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

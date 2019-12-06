import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'posts', loadChildren:'./pages/posts/posts.module#PostsModule' }, // cargar el modulo que tiene la informacion de los posts
  { path: '**', redirectTo: 'home'}, 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

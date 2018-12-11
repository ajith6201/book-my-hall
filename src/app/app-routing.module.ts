import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmyhallHomeComponent } from './bookmyhall-home/bookmyhall-home.component';

const routes: Routes = 
[
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:BookmyhallHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

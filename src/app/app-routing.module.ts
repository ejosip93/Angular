import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from './course/course.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {WalletComponent} from './wallet/wallet.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [{path: '', component: CourseComponent},
  {path: 'courses/:courseId', component: CourseDetailsComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'about', component: AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

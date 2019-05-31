import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructureComponent }   from './structure/structure.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';  


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'structure', component: StructureComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

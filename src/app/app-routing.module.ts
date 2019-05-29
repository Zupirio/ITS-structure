import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructureComponent }   from './structure/structure.component';
import { HomeComponent } from './home/home.component'; 


const routes: Routes = [
  { path: '', redirectTo: '/structure', pathMatch: 'full' },
  { path: 'structure', component: StructureComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

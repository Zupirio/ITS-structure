import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructureComponent }   from './structure/structure.component';
import { HomeComponent } from './home/home.component'; 


const routes: Routes = [
  { path: 'structure', component: StructureComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

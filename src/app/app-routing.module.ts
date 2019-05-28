import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructureComponent }   from './structure/structure.component';

const routes: Routes = [
  { path: 'structure', component: StructureComponent },
  { path: '', redirectTo: '/structure', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './Person/add/add.component';
import { EditComponent } from './Person/edit/edit.component';
import { ToListComponent } from './Person/to-list/to-list.component';

const routes: Routes = [
  { path: 'to-list', component: ToListComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

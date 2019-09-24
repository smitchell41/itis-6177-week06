import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path: 'add',
  component: AddComponent
},
{
  path: 'list',
  component: ListComponent
},
{
  path: '*',
  component: ListComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

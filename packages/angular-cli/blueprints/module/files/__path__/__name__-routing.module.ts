import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { <%= classifiedModuleName %>Component } from './components/<%= dasherizedModuleName %>.component';

const routes: Routes = [
  { path: '', component: <%= classifiedModuleName %>Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class <%= classifiedModuleName %>RoutingModule { }

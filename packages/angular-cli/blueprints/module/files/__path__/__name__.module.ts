import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';<% if (routing) { %>
import { <%= classifiedModuleName %>RoutingModule } from './<%= dasherizedModuleName %>-routing.module';<% } %>
import { <%= classifiedModuleName %>Service } from './<%= dasherizedModuleName %>.service';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    SharedModule,
    CommonModule<% if (routing) { %>,
    <%= classifiedModuleName %>RoutingModule<% } %>
  ],
  declarations: [],
  providers:[<%= classifiedModuleName %>Service]
})
export class <%= classifiedModuleName %>Module { }

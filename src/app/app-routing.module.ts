import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { RoutComponent } from './rout/rout.component';
import { ErrorsComponent } from './errors/errors.component';
import { AppComponent } from './app.component';
import { ChildRouteComponent } from './child-route/child-route.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


const routes: Routes = [
  {path: '',redirectTo:'depart',pathMatch: 'full'},
  {path : 'depart', component:TestComponent},
  {
    path: 'depart/:id',
    component:RoutComponent,
    children:[
      {path:'childs',component:ChildRouteComponent}
      
  ]
  },
  {path: 'emp',component:RoutComponent},
  {path: 'forms',component:FormsComponent},
  {path: 'rforms',component:ReactiveformComponent},
  {path: "**",component:ErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ComponentsRout = [TestComponent,RoutComponent,ErrorsComponent,ChildRouteComponent,FormsComponent]

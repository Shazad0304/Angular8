import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { RoutComponent } from './rout/rout.component';
import { ErrorsComponent } from './errors/errors.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '',redirectTo:'depart',pathMatch: 'full'},
  {path : 'depart', component:TestComponent},
  {path: 'emp/:id',component:RoutComponent},
  {path: 'emp',component:RoutComponent},
  {path: "**",component:ErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ComponentsRout = [TestComponent,RoutComponent,ErrorsComponent]

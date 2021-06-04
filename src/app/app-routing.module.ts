import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
// import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  // { path: 'todo', component: NavigationComponent},
  // { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

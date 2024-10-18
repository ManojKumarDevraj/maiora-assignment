import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '', redirectTo: '/tables', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

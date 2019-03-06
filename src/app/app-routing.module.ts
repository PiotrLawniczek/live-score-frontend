import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './table/table.component';
import {TimetableComponent} from './timetable/timetable.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'timetable', component: TimetableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

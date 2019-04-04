import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableService} from './service/table.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';
import { MaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { TimetableComponent } from './timetable/timetable.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TimetableComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MaterialModule,
    FacebookModule.forRoot(),
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }

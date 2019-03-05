import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableModel} from '../model/table.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClient) {
  }

  apiURL = 'http://localhost:8080/table';


  getTables2() {
    return this.httpClient.get<TableModel[]>(`${this.apiURL}`).subscribe((res => {
      console.log(res);
    }));
  }

  getTables(): Observable<TableModel[]> {
    return this.httpClient.get<TableModel[]>(this.apiURL);

  }
}

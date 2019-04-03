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

  apiURL = 'https://live-score-backend.herokuapp.com/table';

  getTables(): Observable<TableModel[]> {
    return this.httpClient.get<TableModel[]>(this.apiURL);

  }
}

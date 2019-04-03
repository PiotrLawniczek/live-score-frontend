import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MatchModel} from '../model/match.model';
import {RoundInfoModel} from '../model/roundinfo.model';


@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private httpClient: HttpClient) {
  }

  apiURL = 'https://live-score-backend.herokuapp.com/timetable/round';

  getTimetables(count: number): Observable<MatchModel[]> {
    return this.httpClient.get<MatchModel[]>(this.apiURL + '=' + count);
  }

  getNearestRoundToDate(): Observable<RoundInfoModel> {
    return this.httpClient.get<RoundInfoModel>(this.apiURL);
  }

  getTimetables2() {
    return this.httpClient.get<MatchModel[]>(`${this.apiURL}`).subscribe((res => {
      console.log(res);
    }));
  }

}

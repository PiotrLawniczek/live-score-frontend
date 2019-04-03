import { Component, OnInit } from '@angular/core';
import {TimetableService} from '../service/timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.sass']
})
export class TimetableComponent implements OnInit {
  displayedColumns: string[] = ['day', 'hour', 'homeTeam', 'result', 'awayTeam'];
  numberOfRounds;
  round;
  dataSource;
  constructor(private timetableService: TimetableService) { }

  ngOnInit() {
    this.timetableService.getNearestRoundToDate().subscribe(
      data => {
        this.round = data.nearestRound;
        this.numberOfRounds = data.numberOfRounds;
        this.dataSource = this.timetableService.getTimetables(this.round);
      }
    );
  }

  increaseRound(): void {
    this.round++;
    this.dataSource = this.timetableService.getTimetables(this.round);
  }

  reduceRound(): void {
    this.round--;
    this.dataSource = this.timetableService.getTimetables(this.round);
  }


}

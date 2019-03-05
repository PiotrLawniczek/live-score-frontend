import {Component, OnInit} from '@angular/core';
import {TableService} from './service/table.service';
import {TableModel} from './model/table.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'live-score-frontend';
  displayedColumns: string[] = ['team', 'games', 'points', 'wins' , 'looses', 'draws', 'goalsScored', 'goalsConceded'];


  table: TableModel[];
  dataSource = this.tableService.getTables();
  constructor(private tableService: TableService) {
  }

  getTables() {
    this.tableService.getTables2();
  }

  ngOnInit(): void {
    this.tableService.getTables().subscribe(data => this.table = data);

  }


}

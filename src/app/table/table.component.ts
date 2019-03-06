import { Component, OnInit } from '@angular/core';
import {TableModel} from '../model/table.model';
import {TableService} from '../service/table.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['place', 'team', 'games', 'points', 'wins' , 'looses', 'draws', 'goalsScored', 'goalsConceded'];
  table: TableModel[];
  dataSource = this.tableService.getTables();
  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getTables().subscribe(data => this.table = data);

  }

}

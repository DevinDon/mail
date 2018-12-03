import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatPaginatorIntl } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  @ViewChild('inputFilter') filterInput: ElementRef<HTMLInputElement>;
  @ViewChild('table') table: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;
  public dataSource: MatTableDataSource<any>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.data = [];
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.table;
    this.dataSource.filterPredicate = (data, filter) => (data.title as string).indexOf(filter) !== -1;
    fromEvent(this.filterInput.nativeElement, 'keyup')
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => this.dataSource.filter = this.filterInput.nativeElement.value);
    this.getData();
  }

  getData() {
    this.http.get<any>('https://api.github.com/search/issues?q=repo:angular/material2&page=1')
      .subscribe(data => this.dataSource.data = data.items);
  }

  refresh() {
    this.router.navigateByUrl(this.router.url);
  }

}

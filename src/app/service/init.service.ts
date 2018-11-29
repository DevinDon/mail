import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(
    private matPaginatorIntl: MatPaginatorIntl
  ) { }

  public init() {
    this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => `第 ${page * pageSize + 1} - ${Math.min(page * pageSize + pageSize, length)} 条, 共 ${length} 条.`;
    this.matPaginatorIntl.itemsPerPageLabel = '每页显示: ';
    this.matPaginatorIntl.nextPageLabel = '下一页';
    this.matPaginatorIntl.previousPageLabel = '上一页';
  }

}

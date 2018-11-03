import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ComposeDialogComponent } from '../component/dialog/compose-dialog/compose-dialog.component';
import { Mail } from '../type';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  public toggle: Subject<string> = new Subject<string>();

  constructor(
    private dialog: MatDialog
  ) { }

  /**
   * 新邮件窗口.
   */
  openDialogCompose(mail?: Mail): void {
    this.dialog.open(ComposeDialogComponent, {
      autoFocus: false,
      disableClose: true,
      panelClass: 'no-padding',
      data: mail
    });
  }

  sideToggle(tag: string = 'toggle') {
    this.toggle.next(tag);
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material';
import { ComposeDialogComponent } from '../dialog/compose-dialog/compose-dialog.component';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  constructor(
    public user: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit() { }

  compose() {
    this.dialog.open(ComposeDialogComponent, {
      disableClose: false,
      panelClass: 'no-padding'
    });
  }

  now() {
    return Date.now();
  }

  trackByFn(index: number, item): string {
    return item.name;
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { Mail } from '../../../type';
import { UserService } from 'src/app/service/user.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-compose-dialog',
  templateUrl: './compose-dialog.component.html',
  styleUrls: ['./compose-dialog.component.css']
})
export class ComposeDialogComponent implements OnInit {

  constructor(
    public user: UserService,
    @Inject(MAT_DIALOG_DATA) public mail: Mail
  ) { }

  ngOnInit() { }

}

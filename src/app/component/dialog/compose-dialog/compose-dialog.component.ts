import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from 'src/app/service/user.service';
import { Mail } from 'src/app/others/type';

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

import { Component, OnInit } from '@angular/core';
import { Mail } from '../../../type';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-compose-dialog',
  templateUrl: './compose-dialog.component.html',
  styleUrls: ['./compose-dialog.component.css']
})
export class ComposeDialogComponent implements OnInit {

  mail: Mail;

  constructor(
    private user: UserService
  ) {
    this.mail = {
      from: user.mail
    };
  }

  ngOnInit() { }

}

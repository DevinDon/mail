import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ROUTERLIST } from 'src/app/others/config';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  public routerList = ROUTERLIST;

  constructor(
    public user: UserService
  ) { }

  ngOnInit() { }

}

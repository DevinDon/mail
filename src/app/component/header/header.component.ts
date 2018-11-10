import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/service/controller.service';
import { UserService } from 'src/app/service/user.service';
import { ROUTERLIST } from 'src/app/others/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public routerList = ROUTERLIST;

  constructor(
    public user: UserService,
    public controller: ControllerService
  ) { }

  ngOnInit() { }

}

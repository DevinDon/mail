import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ControllerService } from 'src/app/service/controller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public user: UserService,
    public controller: ControllerService
  ) { }

  ngOnInit() { }

}

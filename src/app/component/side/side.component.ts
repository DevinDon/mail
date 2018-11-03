import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ControllerService } from 'src/app/service/controller.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  constructor(
    public user: UserService,
    public controller: ControllerService
  ) { }

  ngOnInit() { }

  now() {
    return Date.now();
  }

  trackByFn(index: number, item): string {
    return item.name;
  }

}

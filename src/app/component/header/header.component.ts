import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ControllerService } from 'src/app/service/controller.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fromTransFromTopToBottomIn, TimeLine, fromOpaqueFromBottomToTopOut } from 'src/app/animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('header', [
      transition(':enter', [
        useAnimation(fromTransFromTopToBottomIn, {
          params: { time: TimeLine.delayIn }
        })
      ]),
      transition(':leave', [
        useAnimation(fromOpaqueFromBottomToTopOut, {
          params: { time: TimeLine.delayOut }
        })
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor(
    public user: UserService,
    public controller: ControllerService
  ) { }

  ngOnInit() { }

}

import { transition, trigger, useAnimation, query, style, animateChild, animate, group } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { fromOpaqueFromRightToLeftOut, fromTransFromLeftToRightIn, fromTransFromRightToLeftIn, TimeLine, fromOpaqueFromLeftToRightOut } from 'src/app/others/animation';
import { ControllerService } from 'src/app/service/controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('router', [
      transition('* <=> *', [
        useAnimation(fromTransFromRightToLeftIn, { params: { time: TimeLine.in } })
        // query(':enter', [
        //   style({ opacity: 0 }),
        // ], { optional: true }),
        // query(':leave', [
        //   style({ opacity: 1 }),
        //   animate('1s', style({ opacity: 0 }))
        // ], { optional: true }),
        // query(':enter', [
        //   style({ opacity: 0 }),
        //   animate('1s', style({ opacity: 1 }))
        // ], { optional: true })
      ])
    ]),
    trigger('content', [
      transition('void => left', [
        useAnimation(fromTransFromLeftToRightIn, {
          params: { time: TimeLine.delayIn }
        })
      ]),
      transition('void => right', [
        useAnimation(fromTransFromRightToLeftIn, {
          params: { time: TimeLine.delayIn }
        })
      ]),
      transition(':leave', [
        useAnimation(fromOpaqueFromRightToLeftOut, {
          params: { time: TimeLine.out }
        })
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  /** 侧边栏. */
  @ViewChild('sidenav')
  private sidenav: MatSidenav;
  public page: string;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public controller: ControllerService
  ) {
    this.page = 'void';
  }

  ngOnInit() {
    this.controller.observableSidenavToggle.subscribe(v => {
      switch (v) {
        case 'toggle': this.sidenav.toggle(); break;
        case 'open': this.sidenav.open(); break;
        case 'close': this.sidenav.close(); break;
        default: this.sidenav.toggle(); break;
      }
    });
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        this.page = event.state.root.firstChild.data['animation'];
      }
    });
  }

}

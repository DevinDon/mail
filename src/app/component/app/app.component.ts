import { animate, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { fromOpaqueFromBottomToTopOut, fromOpaqueFromTopToBottomOut, fromTransFromBottomToTopIn, fromTransFromLeftToRightIn, fromTransFromRightToLeftIn, fromTransFromTopToBottomIn, fromTransIn, TimeLine } from 'src/app/others/animation';
import { ControllerService } from 'src/app/service/controller.service';
import { InitService } from 'src/app/service/init.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('header', [
      transition(':enter', [useAnimation(fromTransFromTopToBottomIn, { params: { time: TimeLine.in } })]),
      transition(':leave', [useAnimation(fromOpaqueFromBottomToTopOut, { params: { time: TimeLine.out } })])
    ]),
    trigger('container', [
      transition('* <=> *', [
        animate('2s', keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0.75, offset: 0.5 }),
          style({ opacity: 1, offset: 1 })
        ]))
      ])
    ]),
    trigger('content', [
      transition('void => left', [useAnimation(fromTransFromLeftToRightIn, { params: { time: TimeLine.in } })]),
      transition('void => right', [useAnimation(fromTransFromRightToLeftIn, { params: { time: TimeLine.in } })]),
      transition('void => top', [useAnimation(fromTransFromTopToBottomIn, { params: { time: TimeLine.in } })]),
      transition('* => *', [useAnimation(fromTransIn, { params: { time: TimeLine.in } })])
    ]),
    trigger('footer', [
      transition(':enter', [useAnimation(fromTransFromBottomToTopIn, { params: { time: TimeLine.in } })]),
      transition(':leave', [useAnimation(fromOpaqueFromTopToBottomOut, { params: { time: TimeLine.out } })])
    ])
  ]
})
export class AppComponent implements OnInit {

  /** 侧边栏. */
  @ViewChild('sidenav') private sidenav: MatSidenav;
  /** 侧边栏模式. */
  private sidenavMode: string;
  /** 顶栏动画状态. */
  public headerAnimationState: string;
  /** 内容区动画状态. */
  public contentAnimationState: string;
  /** 页脚动画状态. */
  public footerAnimationState: string;
  /** 是否显示顶栏页脚. */
  public shouldShow: boolean;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public controller: ControllerService,
    public user: UserService,
    private init: InitService
  ) {
    this.headerAnimationState = 'here';
    this.contentAnimationState = 'top';
    this.footerAnimationState = 'here';
    this.shouldShow = false;
    this.sidenavMode = this.controller.deviceTypeIs('desktop') ? 'side' : 'over';
  }

  ngOnInit() {
    this.controller.sidenavSubscribe(v => {
      switch (v) {
        case 'toggle': this.sidenav.toggle(); break;
        case 'open': this.sidenav.open(); break;
        case 'close': this.sidenav.close(); break;
        default: this.sidenav.toggle(); break;
      }
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.contentAnimationState = Date.now().toString();
        this.shouldShow = !event.url.startsWith('/sign');
      }
    });
    this.init.init();
  }

}

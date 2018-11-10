import { transition, trigger, useAnimation, animate, style, keyframes } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { fromOpaqueFromBottomToTopOut, fromOpaqueFromTopToBottomOut, fromTransFromBottomToTopIn, fromTransFromLeftToRightIn, fromTransFromRightToLeftIn, fromTransFromTopToBottomIn, fromTransIn, TimeLine } from 'src/app/others/animation';
import { ControllerService } from 'src/app/service/controller.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('header', [
      transition(':enter', [useAnimation(fromTransFromTopToBottomIn, { params: { time: TimeLine.delayIn } })]),
      transition(':leave', [useAnimation(fromOpaqueFromBottomToTopOut, { params: { time: TimeLine.delayOut } })])
    ]),
    trigger('container', [
      transition('full => part', [
        animate('2s', keyframes([
          style({ padding: '0', opacity: 1, offset: 0 }),
          style({ padding: '0', opacity: 0, offset: 0.25 }),
          style({ padding: '32px 0 18px 0', opacity: 0, offset: 0.5 }),
          style({ padding: '64px 0 36px 0', opacity: 1, offset: 1 })
        ]))
      ]),
      transition('part => full', [
        animate('2s', keyframes([
          style({ padding: '64px 0 36px 0', opacity: 1, offset: 0 }),
          style({ padding: '64px 0 36px 0', opacity: 0, offset: 0.25 }),
          style({ padding: '0', opacity: 0, offset: 0.5 }),
          style({ padding: '0', opacity: 1, offset: 1 })
        ]))
      ])
    ]),
    trigger('content', [
      transition('void => left', [useAnimation(fromTransFromLeftToRightIn, { params: { time: TimeLine.delayIn } })]),
      transition('void => right', [useAnimation(fromTransFromRightToLeftIn, { params: { time: TimeLine.delayIn } })]),
      transition('void => top', [useAnimation(fromTransFromTopToBottomIn, { params: { time: TimeLine.delayIn } })]),
      transition('* => *', [useAnimation(fromTransIn, { params: { time: TimeLine.in } })])
    ]),
    trigger('footer', [
      transition(':enter', [useAnimation(fromTransFromBottomToTopIn, { params: { time: TimeLine.delayIn } })]),
      transition(':leave', [useAnimation(fromOpaqueFromTopToBottomOut, { params: { time: TimeLine.delayOut } })])
    ])
  ]
})
export class AppComponent implements OnInit {

  /** 侧边栏. */
  @ViewChild('sidenav')
  private sidenav: MatSidenav;
  /** 顶栏动画状态. */
  public headerAnimationState: string;
  /** 内容区动画状态. */
  public contentAnimationState: string;
  /** 页脚动画状态. */
  public footerAnimationState: string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public controller: ControllerService,
    public user: UserService
  ) {
    this.headerAnimationState = 'here';
    this.contentAnimationState = 'top';
    this.footerAnimationState = 'here';
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
    setTimeout(() => {
      this.router.events.subscribe(event => {
        if (event instanceof RoutesRecognized) {
          this.contentAnimationState = Date.now().toString();
        }
      });
    }, 1500);
  }

}

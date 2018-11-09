import { transition, trigger, useAnimation, query, group, style, animate, animateChild } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { fromOpaqueFromBottomToTopOut, fromOpaqueFromRightToLeftOut, fromOpaqueFromTopToBottomOut, fromTransFromBottomToTopIn, fromTransFromLeftToRightIn, fromTransFromRightToLeftIn, fromTransFromTopToBottomIn, TimeLine, fromOpaqueOut, fromTransIn } from 'src/app/others/animation';
import { ControllerService } from 'src/app/service/controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('header', [
      transition(':enter', [useAnimation(fromTransFromTopToBottomIn, { params: { time: TimeLine.delayIn } })]),
      transition(':leave', [useAnimation(fromOpaqueFromBottomToTopOut, { params: { time: TimeLine.delayOut } })])
    ]),
    trigger('content', [
      transition('void => left', [useAnimation(fromTransFromLeftToRightIn, { params: { time: TimeLine.delayIn } })]),
      transition('void => right', [useAnimation(fromTransFromRightToLeftIn, { params: { time: TimeLine.delayIn } })]),
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
    public controller: ControllerService
  ) {
    this.headerAnimationState = 'here';
    this.contentAnimationState = 'right';
    this.footerAnimationState = 'here';
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
    setTimeout(() => {
      this.router.events.subscribe(event => {
        if (event instanceof RoutesRecognized) {
          this.contentAnimationState = event.state.root.firstChild.data['animation'];
        }
      });
    }, 1500);
  }

}

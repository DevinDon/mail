import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TimeLine, fromTransFromBottomToTopIn, fromOpaqueFromTopToBottomOut } from 'src/app/others/animation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('footer', [
      transition(':enter', [
        useAnimation(fromTransFromBottomToTopIn, {
          params: { time: TimeLine.delayIn }
        })
      ]),
      transition(':leave', [
        useAnimation(fromOpaqueFromTopToBottomOut, {
          params: { time: TimeLine.delayOut }
        })
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {

  clock: string;

  constructor() {
    this.clock = this.getTime(Date.now());
  }

  ngOnInit() {
    setInterval(() => this.clock = this.getTime(Date.now()), 1000);
  }

  getTime(time: number): string {
    const t = new Date(time);
    return `${t.getHours() < 10 ? '0' : ''}${t.getHours()}:${t.getMinutes() < 10 ? '0' : ''}${t.getMinutes()}:${t.getSeconds() < 10 ? '0' : ''}${t.getSeconds()}`;
  }

}

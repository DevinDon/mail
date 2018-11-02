import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
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

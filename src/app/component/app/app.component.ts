import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ControllerService } from 'src/app/service/controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav')
  public sidenav: MatSidenav;

  title = 'Mail';

  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
    this.controller.observableSidenavToggle.subscribe(v => {
      switch (v) {
        case 'toggle': this.sidenav.toggle(); break;
        case 'open': this.sidenav.open(); break;
        case 'close': this.sidenav.close(); break;
        default: this.sidenav.toggle(); break;
      }
    });
  }

}

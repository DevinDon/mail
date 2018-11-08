import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'uni-exception-page',
  templateUrl: './exception-page.component.html',
  styleUrls: ['./exception-page.component.css'],
  providers: []
})
export class ExceptionPageComponent implements OnInit {

  public data: Data;

  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.data = {};
  }

  ngOnInit() {
    this.route.data.subscribe(
      v => this.data = v,
      e => console.error(`Error on ExceptionPageComponent: ${e}`)
    );
  }

}

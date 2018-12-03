import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/service/api.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  public backgroundImage: string;

  constructor(
    private api: APIService
  ) {
    this.backgroundImage = `url(assets/background-image-${Math.ceil(Math.random() * 5)}.jpg)`;
  }

  ngOnInit() { }

}

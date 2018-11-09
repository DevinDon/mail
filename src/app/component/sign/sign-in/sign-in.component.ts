import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private user: UserService
  ) { }

  ngOnInit() { }

  signIn() {
    this.user.signIn({ id: 123456 });
  }

}

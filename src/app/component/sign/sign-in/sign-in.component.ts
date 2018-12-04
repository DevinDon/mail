import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControllerService } from 'src/app/service/controller.service';
import { NotificationService } from 'src/app/service/notification.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  // status: string;

  constructor(
    private controller: ControllerService,
    private former: FormBuilder,
    private router: Router,
    private user: UserService,
    private notification: NotificationService
  ) {
    this.form = former.group({
      name: former.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
      password: former.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(64)])
    });
  }

  ngOnInit() { }

  signIn() {
    this.controller.status = 'loading';
    this.user.signIn({
      name: this.form.get('name').value,
      password: this.form.get('password').value
    }).subscribe({
      next: v => v.status ? this.router.navigateByUrl('/home') : this.notification.notice('用户名或密码错误.'),
      error: e => {
        this.notification.notice('网络错误, 请稍后重试.');
        console.error(`Sign in error: ${e}`);
        this.controller.status = 'error';
      },
      complete: () => this.controller.status = 'done'
    });
  }

}

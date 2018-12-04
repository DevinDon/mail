import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/service/api.service';
import { NotificationService } from 'src/app/service/notification.service';
import { UserService } from 'src/app/service/user.service';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('inputName') inputName: ElementRef<HTMLInputElement>;

  public form: FormGroup;
  public status: string;
  public usable: boolean;

  constructor(
    private api: APIService,
    private former: FormBuilder,
    private notification: NotificationService,
    private router: Router,
    private user: UserService
  ) {
    this.form = former.group({
      name: former.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
      password: former.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(64)])
    });
  }

  ngOnInit() {
    fromEvent(this.inputName.nativeElement, 'input')
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(v => (this.usable = false, this.form.get('name').valid && (this.status = 'loading')));
    fromEvent(this.inputName.nativeElement, 'input')
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        filter(() => this.form.get('name').valid)
      ).subscribe(v => {
        this.isUsable();
      });
  }

  isUsable() {
    this.status = 'loading';
    this.api.getUser({ name: this.form.get('name').value })
      .subscribe({
        next: v => {
          this.usable = v.status;
          this.notification.notice(`用户名 ${this.form.get('name').value} ${v.status ? '' : '不'}可用.`);
        },
        error: e => {
          this.usable = false;
          this.notification.notice('网络错误, 请稍后重试.');
          this.status = 'error';
        },
        complete: () => {
          this.status = 'done';
        }
      });
  }

  signUp() {
    this.status = 'loading';
    this.user.signUp({
      name: this.form.get('name').value,
      password: this.form.get('password').value
    }).subscribe({
      next: v => {
        if (v && v.status) {
          this.notification.notice(`用户 ${v.data.name} 注册成功.`);
          this.router.navigateByUrl('/home');
        } else {
          this.notification.notice(`用户 ${v.data.name} 已存在, 请重试.`);
        }
      },
      error: e => {
        this.status = 'error';
        this.notification.notice('网络错误, 请稍后重试.');
      },
      complete: () => this.status = 'done'
    });
  }

}

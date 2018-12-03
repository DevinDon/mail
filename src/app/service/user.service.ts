import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Contact, Folder, ToDoEvents, UserInfo, Response } from '../others/type';
import { ROUTERLIST } from '../others/config';
import { APIService } from './api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /** 用户信息. */
  private user?: UserInfo;

  /** 文件夹. */
  public folders: Folder[];
  /** 联系人. */
  public contacts: Contact[];
  /** 日程. */
  public todoEvents: ToDoEvents[];

  constructor(
    private api: APIService,
    private router: Router
  ) {
    // this.info = {};
    this.folders = [];
    this.contacts = [];
    this.todoEvents = [];
    this.mock();
  }

  signIn(userInfo: UserInfo): Observable<Response<UserInfo>> {
    return this.api.postSignIn(userInfo)
      .pipe(map(v => (this.user = v.status ? v.data : undefined, v)));
  }

  signUp(userInfo: UserInfo): Observable<Response<UserInfo>> {
    return this.api.postSignUp(userInfo)
      .pipe(map(v => (this.user = v.status ? v.data : undefined, v)));
  }

  signOut(): Observable<Response<any>> {
    return this.api.postSignOut()
      .pipe(
        map(v => {
          this.user = v.status ? undefined : this.user;
          return v;
        })
      );
  }

  isSignIn() {
    return (this.user && this.user.id) ? true : false;
  }

  mock() {

    this.folders = [
      { path: ROUTERLIST.inbox, name: '所有邮件', icon: 'mail' },
      { path: ROUTERLIST.subscription, name: '订阅邮件', icon: 'subscriptions' },
      { path: ROUTERLIST.draft, name: '草稿箱', icon: 'drafts' },
      { path: ROUTERLIST.trash, name: '垃圾箱', icon: 'delete' }
    ];

    this.contacts = [
      {
        name: 'Devin Don',
        mail: 'DevinDon@Foxmail.com',
        head: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Lin_Chi-Ling_%28cropped%29.jpg'
      },
      {
        name: '夜寒苏',
        mail: 'Devin9598@Foxmail.com',
        head: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Lin_Chi-Ling_%28cropped%29.jpg'
      }
    ];

    this.todoEvents = [
      { name: '买牛奶', time: new Date('2018.1.11 10:00:00').getTime(), done: false },
      { name: '开会', time: new Date('2018.12.31 12:30:00').getTime(), done: false },
      { name: '学习', time: new Date('2018.12.31 12:30:00').getTime(), done: true }
    ];

  }

}

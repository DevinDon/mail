import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Contact, Folder, ToDoEvents, UserInfo } from '../others/type';
import { ROUTERLIST } from '../others/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /** 用户信息. */
  private info: UserInfo;

  /** 文件夹. */
  public folders: Folder[];
  /** 联系人. */
  public contacts: Contact[];
  /** 日程. */
  public todoEvents: ToDoEvents[];

  constructor(
    private router: Router
  ) {
    // this.info = {};
    this.folders = [];
    this.contacts = [];
    this.todoEvents = [];
    this.mock();
  }

  signIn(userInfo: UserInfo) {
    // api.signIn(userInfo).subscription(r => this.info = r.success ? userInfo : {});
    this.info = userInfo; // dev only
  }

  signUp(userInfo: UserInfo) {
    // api.signUp(userInfo).subscription(r => this.info = r.success ? userInfo : {});
    this.info = userInfo; // dev only
  }

  signOut() {
    this.info = undefined;
    this.router.navigate(ROUTERLIST.signout);
  }

  isSignIn() {
    return (this.info && this.info.id) ? true : false;
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

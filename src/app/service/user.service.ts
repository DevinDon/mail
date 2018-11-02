import { Injectable } from '@angular/core';
import { Folder, Contact, ToDoEvents } from '../type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /** 用户 ID. */
  public id: number;
  /** 用户名. */
  public name: string;
  /** 用户邮箱地址. */
  public mail: string;

  /** 文件夹. */
  public folders: Folder[];
  /** 联系人. */
  public contacts: Contact[];
  /** 日程. */
  public todoEvents: ToDoEvents[];

  constructor() {
    this.folders = [];
    this.contacts = [];
    this.todoEvents = [];
    this.mock();
  }

  mock() {

    this.folders = [
      { path: ['folder', 'inbox'], name: '所有邮件', icon: 'folder' },
      { path: ['folder', 'focus'], name: '重要邮件', icon: 'folder' },
      { path: ['folder', 'draft'], name: '草稿箱', icon: 'drafts' },
      { path: ['folder', 'trash'], name: '垃圾箱', icon: 'folder' }
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
      { name: '买牛奶', time: new Date('2018.1.11 10:00:00'), done: false },
      { name: '开会', time: new Date('2018.12.31 12:30:00'), done: false },
      { name: '学习', time: new Date('2018.12.31 12:30:00'), done: true }
    ];

  }

}

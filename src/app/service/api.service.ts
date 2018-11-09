import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo, Response } from '../others/type';
import { SERVER } from '../others/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private client: HttpClient
  ) { }

  /**
   * 向服务器发送登录请求.
   * @param userInfo 用户登录信息.
   */
  signIn(userInfo: UserInfo): Observable<Response> {
    return <Observable<Response>>this.client.post(SERVER.toURL('/signin'), userInfo);
  }

}

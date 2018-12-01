import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo, Response } from '../others/type';
import { SERVER } from '../others/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private client: HttpClient
  ) { }

  /**
   * 向服务器发送登录请求.
   * @param userInfo 用户登录信息.
   */
  signIn(userInfo: UserInfo): Observable<Response<UserInfo>> {
    return this.client.post<Response<UserInfo>>('http://localhost/v1/sign/in', userInfo);
  }

}

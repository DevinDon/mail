import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response, UserInfo } from '../others/type';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private api: string;

  constructor(
    private client: HttpClient
  ) {
    // this.api = 'api';
    this.api = 'http://localhost';
  }

  /**
   * 向服务器发送登录请求.
   * @param userInfo 用户登录信息.
   */
  postSignIn(userInfo: UserInfo): Observable<Response<UserInfo>> {
    return this.client.post<Response<UserInfo>>(`${this.api}/v1/sign/in`, userInfo);
  }

  /**
   * 向服务器发送注册请求.
   * @param userInfo 用户注册信息.
   */
  postSignUp(userInfo: UserInfo): Observable<Response<UserInfo>> {
    return this.client.post<Response<UserInfo>>(`${this.api}/v1/sign/up`, userInfo);
  }

  /**
   * 检测指定的项 (如用户名) 是否可被注册.
   * @param params 用于检测的项目.
   */
  getUser(params: any) {
    return this.client.get<Response<void>>(`${this.api}/v1/user`, { params });
  }

  /** 向服务器发送注销登录请求. */
  postSignOut(info: any = {}): Observable<Response<any>> {
    return this.client.post<Response<any>>(`${this.api}/v1/sign/out`, info);
  }

}

import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/service/controller.service';
import { UserService } from 'src/app/service/user.service';
import { ROUTERLIST } from 'src/app/others/config';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public routerList = ROUTERLIST;

  constructor(
    public controller: ControllerService,
    private notification: NotificationService,
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit() { }

  signOut() {
    this.user.signOut().subscribe({
      next: v => this.router.navigate(this.routerList.signin),
      error: e => {
        this.notification.notice('退出登录时发生错误.');
        console.error(`注销登录时发生错误: ${JSON.stringify(e)}`);
      },
      complete: () => this.notification.notice('已退出登录.')
    });
  }

}

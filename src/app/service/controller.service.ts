import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ComposeDialogComponent } from '../component/dialog/compose-dialog/compose-dialog.component';
import { Mail, Device } from '../others/type';
import { Subject, fromEvent } from 'rxjs';
import { getComposeDialogConfig } from '../others/config';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  /** 设备类型及屏幕尺寸. */
  public device: Device;
  /** 组件通讯服务: 侧边导航栏展开 / 关闭. */
  public observableSidenavToggle: Subject<string>;

  constructor(
    private dialog: MatDialog
  ) {
    this.observableSidenavToggle = new Subject<string>();
    this.device = this.getDeviceType();
    fromEvent(window, 'resize').subscribe(event => this.device = this.getDeviceType());
  }

  /**
   * 获取设备类型及屏幕尺寸.
   * @returns 设备类型及屏幕尺寸.
   */
  getDeviceType(): Device {
    if (innerWidth <= 320) { // 小屏手机
      return { type: 'mobile', size: 's' };
    } else if (innerWidth <= 375) { // 中屏手机
      return { type: 'mobile', size: 'm' };
    } else if (innerWidth <= 425) { // 大屏手机
      return { type: 'mobile', size: 'l' };
    } else if (innerWidth <= 768) { // 平板
      return { type: 'table', size: 'm' };
    } else if (innerWidth <= 1024) { // 大平板 或 小尺寸桌面
      return { type: 'desktop', size: 's' };
    } else if (innerWidth <= 1440) { // 中等尺寸桌面
      return { type: 'desktop', size: 'm' };
    } else if (innerWidth <= 1920) { // 大尺寸桌面
      return { type: 'desktop', size: 'l' };
    } else if (innerWidth <= 2560) { // 2K 桌面
      return { type: 'desktop', size: 'l' };
    } else { // 巨型展示荧幕
      return { type: 'desktop', size: 'l' };
    }
  }

  /**
   * 新邮件窗口.
   * @param mail 邮件内容.
   */
  openDialogCompose(mail?: Mail): void {
    this.dialog.open(ComposeDialogComponent, getComposeDialogConfig(this.device, mail));
  }

  /**
   * 开启或关闭侧边导航栏.
   * @param tag 对侧边导航栏进行的操作.
   */
  sideToggle(tag: string = 'toggle'): void {
    this.observableSidenavToggle.next(tag);
  }

}

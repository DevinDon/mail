import { MatDialogConfig } from '@angular/material';
import { Mail, DeviceConfig, Device } from './type';

/** 新邮件窗口配置. */
const composeDialogConfig: DeviceConfig<MatDialogConfig<Mail>> = {
  desktop: {
    default: {
      autoFocus: false,
      disableClose: true,
      hasBackdrop: false,
      panelClass: [
        'no-padding',
        'top-shadow',
        'left-shadow'
      ],
      position: { right: '0', bottom: '0' }
    }
  },
  table: {
    default: {
      autoFocus: false,
      disableClose: true,
      hasBackdrop: false,
      panelClass: [
        'no-padding',
        'top-shadow',
        'left-shadow'
      ],
      position: { right: '0', bottom: '0' }
    }
  },
  mobile: {
    default: {
      autoFocus: false,
      disableClose: true,
      hasBackdrop: false,
      panelClass: [
        'no-padding',
        'full-size'
      ],
      width: '100vw',
      height: '100vh',
      position: { top: '0', left: '0' }
    }
  }
};

/**
 * 根据设备类型选择新邮件窗口配置.
 * @param device 设备类型信息.
 * @param data 邮件数据.
 */
export function getComposeDialogConfig(device: Device, data?: Mail): MatDialogConfig<Mail> {
  const config = composeDialogConfig[device.type][device.size] || composeDialogConfig[device.type].default;
  config.data = data;
  return config;
}

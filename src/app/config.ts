import { MatDialogConfig } from '@angular/material';
import { Mail, DeviceConfig } from './type';

export const composeDialogConfig: DeviceConfig<MatDialogConfig<Mail>> = {
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

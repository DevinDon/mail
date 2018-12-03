import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ControllerService } from './controller.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private controller: ControllerService,
    private snackBar: MatSnackBar
  ) { }

  notice(message: string) {
    this.snackBar.open(message, '了解', this.controller.deviceTypeIs('desktop')
      ? {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        duration: 5000
      }
      : {
        duration: 5000
      });
  }

}

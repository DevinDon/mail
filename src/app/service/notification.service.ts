import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  notice(message: string) {
    this.snackBar.open(message, '了解', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 5000
    });
  }

}

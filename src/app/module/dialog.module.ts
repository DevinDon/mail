import { NgModule } from '@angular/core';
import { ComposeDialogComponent } from '../component/dialog/compose-dialog/compose-dialog.component';
import { MatModule } from './mat.module';
import { OtherModule } from './other.module';

@NgModule({
  imports: [
    MatModule,
    OtherModule
  ],
  exports: [
    ComposeDialogComponent
  ],
  declarations: [
    ComposeDialogComponent
  ],
  entryComponents: [
    ComposeDialogComponent
  ]
})
export class DialogModule { }

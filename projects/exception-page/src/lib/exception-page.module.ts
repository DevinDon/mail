import { NgModule } from '@angular/core';
import { ExceptionPageComponent } from './exception-page.component';
import { ExceptionPageService } from './exception-page.service';

@NgModule({
  declarations: [ExceptionPageComponent],
  imports: [],
  exports: [ExceptionPageComponent],
  providers: [ExceptionPageService]
})
export class ExceptionPageModule { }

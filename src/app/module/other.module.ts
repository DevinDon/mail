import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExceptionPageModule } from 'exception-page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ExceptionPageModule
  ]
})
export class OtherModule { }

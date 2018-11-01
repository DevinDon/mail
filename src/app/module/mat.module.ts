import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatExpansionModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: []
})
export class MatModule { }

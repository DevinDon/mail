import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MatModule } from './module/mat.module';
import { AppComponent } from './component/app/app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SideComponent } from './component/side/side.component';
import { HomeComponent } from './component/home/home.component';
import { InboxComponent } from './component/folder/inbox/inbox.component';
import { DialogModule } from './module/dialog.module';
import { OtherModule } from './module/other.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    HomeComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    DialogModule,
    OtherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

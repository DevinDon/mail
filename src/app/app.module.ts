import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component/app/app.component';
import { InboxComponent } from './component/folder/inbox/inbox.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SideComponent } from './component/side/side.component';
import { DialogModule } from './module/dialog.module';
import { MatModule } from './module/mat.module';
import { OtherModule } from './module/other.module';
import { RoutingModule } from './module/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatModule,
    DialogModule,
    OtherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

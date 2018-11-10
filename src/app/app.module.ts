import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component/app/app.component';
import { ContactComponent } from './component/content/contact/contact.component';
import { FolderComponent } from './component/content/folder/folder.component';
import { HomeComponent } from './component/content/home/home.component';
import { ToDoEventComponent } from './component/content/to-do-event/to-do-event.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SideComponent } from './component/side/side.component';
import { SignInComponent } from './component/sign/sign-in/sign-in.component';
import { SignOutComponent } from './component/sign/sign-out/sign-out.component';
import { SignUpComponent } from './component/sign/sign-up/sign-up.component';
import { SignComponent } from './component/sign/sign.component';
import { DialogModule } from './module/dialog.module';
import { MatModule } from './module/mat.module';
import { OtherModule } from './module/other.module';
import { RoutingModule } from './module/routing.module';
import { InboxComponent } from './component/content/folder/inbox/inbox.component';
import { SubscriptionComponent } from './component/content/folder/subscription/subscription.component';
import { DraftComponent } from './component/content/folder/draft/draft.component';
import { TrashComponent } from './component/content/folder/trash/trash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    SignInComponent,
    SignUpComponent,
    SignComponent,
    SignOutComponent,
    FolderComponent,
    ContactComponent,
    HomeComponent,
    ToDoEventComponent,
    InboxComponent,
    SubscriptionComponent,
    DraftComponent,
    TrashComponent
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

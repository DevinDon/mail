import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExceptionPageComponent } from 'exception-page';
import { ContactComponent } from '../component/content/contact/contact.component';
import { DraftComponent } from '../component/content/folder/draft/draft.component';
import { FolderComponent } from '../component/content/folder/folder.component';
import { InboxComponent } from '../component/content/folder/inbox/inbox.component';
import { SubscriptionComponent } from '../component/content/folder/subscription/subscription.component';
import { TrashComponent } from '../component/content/folder/trash/trash.component';
import { HomeComponent } from '../component/content/home/home.component';
import { ToDoEventComponent } from '../component/content/to-do-event/to-do-event.component';
import { SignInComponent } from '../component/sign/sign-in/sign-in.component';
import { SignOutComponent } from '../component/sign/sign-out/sign-out.component';
import { SignUpComponent } from '../component/sign/sign-up/sign-up.component';
import { SignComponent } from '../component/sign/sign.component';
import { AuthGuard } from '../others/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }, {
        path: 'home',
        component: HomeComponent,
        data: { animation: 'home' }
      }, {
        path: 'folder',
        component: FolderComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: '/folder/inbox' },
          { path: 'inbox', component: InboxComponent },
          { path: 'subscription', component: SubscriptionComponent },
          { path: 'draft', component: DraftComponent },
          { path: 'trash', component: TrashComponent },
          { path: '**', component: ExceptionPageComponent }
        ]
      }, {
        path: 'contact',
        component: ContactComponent,
        children: [
          { path: '**', component: ExceptionPageComponent }
        ]
      }, {
        path: 'todoevent',
        component: ToDoEventComponent,
        children: [
          { path: '**', component: ExceptionPageComponent }
        ]
      }
    ]
  }, {
    path: 'sign',
    component: SignComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/sign/in' },
      { path: 'in', component: SignInComponent },
      { path: 'up', component: SignUpComponent },
      { path: 'out', component: SignOutComponent }
    ]
  }, {
    path: '**',
    component: ExceptionPageComponent,
    data: {
      animation: 'exception',
      exception: 404
    }
  }
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: ExceptionPageComponent,
  //   data: { animation: 'home' }
  // }, {
  //   path: 'folder',
  //   pathMatch: 'full',
  //   redirectTo: 'folder/inbox'
  // }, {
  //   path: 'folder/inbox',
  //   component: InboxComponent,
  //   data: { animation: 'inbox' }
  // }, {
  //   path: 'todoevent/:id',
  //   component: ExceptionPageComponent,
  //   data: { animation: 'todoevent' }
  // }, {
  //   path: '**',
  //   component: ExceptionPageComponent,
  //   data: {
  //     animation: 'exception',
  //     exception: 404
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutingModule { }

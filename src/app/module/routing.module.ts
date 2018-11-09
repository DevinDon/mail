import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExceptionPageComponent } from 'exception-page';
import { InboxComponent } from '../component/folder/inbox/inbox.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ExceptionPageComponent,
    data: { animation: 'home' }
  }, {
    path: 'folder',
    pathMatch: 'full',
    redirectTo: 'folder/inbox'
  }, {
    path: 'folder/inbox',
    component: InboxComponent,
    data: { animation: 'inbox' }
  }, {
    path: 'todoevent/:id',
    component: ExceptionPageComponent,
    data: { animation: 'todoevent' }
  }, {
    path: '**',
    component: ExceptionPageComponent,
    data: {
      animation: 'exception',
      exception: 404
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

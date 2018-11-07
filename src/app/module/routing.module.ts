import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { InboxComponent } from '../component/folder/inbox/inbox.component';
import { PageNotFoundComponent } from '../component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { animation: 'Home' }
  }, {
    path: 'folder',
    pathMatch: 'full',
    redirectTo: 'folder/inbox',
    data: { animation: 'Folder' }
  }, {
    path: 'folder/inbox',
    component: InboxComponent,
    data: { animation: 'Inbox' }
  }, {
    path: 'todoevent/:id',
    component: HomeComponent,
    data: { hello: 'hello' }
  }, {
    path: '**',
    component: PageNotFoundComponent,
    data: { animation: 'All' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

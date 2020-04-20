import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { HelloComponent } from './hello/hello.component';
import {RouterModule, Routes} from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import { HiComponent } from './hi/hi.component';
import { OlaComponent } from './ola/ola.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostComponent } from './post/post.component';
import {PostResolverService} from './services/post-resolver.service';

const routes: Routes = [
  // localhost: 4200/users -> UserComponent
  {path: 'hello', component: HelloComponent, children: [
      {path: 'hi', component: HiComponent},
    ]},
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService}, children: [
      {path: ':id/posts', component: AllPostsComponent}
    ]},
  {path: 'hello/ola', component: OlaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HelloComponent,
    AllUsersComponent,
    HiComponent,
    OlaComponent,
    AllPostsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

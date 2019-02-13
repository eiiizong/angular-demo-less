import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  // 指定该模块中定义的组件
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    ArticleComponent
  ],
  // 描述该模块有哪些依赖
  imports: [
    BrowserModule, // 浏览器应用
  ],
  providers: [],
  // 告诉 angular 当使用该模块引导应用时，我们要把AppComponent加载为顶层组件。
  bootstrap: [AppComponent]
})
export class AppModule { }

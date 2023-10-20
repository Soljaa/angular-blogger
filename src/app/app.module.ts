import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { PostContentComponent } from './pages/post-content/post-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PostComponent,
    HomeComponent,
    ContentComponent,
    CustomFooterComponent,
    PostContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

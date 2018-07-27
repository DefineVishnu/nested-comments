import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './comment/comments.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

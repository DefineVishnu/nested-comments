import { Component } from '@angular/core';
import { comments } from './comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
// passing input  adding comments to post comments

  postComments = comments
}

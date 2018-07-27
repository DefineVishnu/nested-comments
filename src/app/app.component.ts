import { Component } from '@angular/core';
import { comments, CommentModel } from './comments';
import { CommentsService } from './comment/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  parentId:number;
  postComments:CommentModel[];
// passing input  adding comments to post comments
constructor(
 private  commentService:CommentsService
)
{
this.postComments=this.commentService.getRootComments()


}





  showComents(){
    this.parentId=0
  }
}

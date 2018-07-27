import { Injectable } from '@angular/core';
import { comments, CommentModel } from '../comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }





  getRootComments(): CommentModel[] {
    // get root comments ie comments with parent id of zero
    return this.getCommentsByparentId(0)
  }




  getCommentsByparentId(parentId: number): CommentModel[] {
    //getting comments with  parent id 
    return comments.filter(c => c.parent == parentId)
  }

}

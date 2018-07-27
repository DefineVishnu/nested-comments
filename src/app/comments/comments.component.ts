import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../comment/comments.service';
import { CommentModel, comments } from '../comments';

@Component({
  selector: 'comments-list',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input("comment") comment: CommentModel = {};


  constructor(
    private commentService: CommentsService
  ) { }

  ngOnInit() {
  }


  getCommentsByParentId(parentId: number) {

    this.comment.subComments = this.commentService.getCommentsByparentId(parentId)
    // Object.assign(this.comment.subComments, commentLits)


  }

  getReplyComment(parent: number) {
    // this.parentId = parent
    this.getCommentsByParentId(parent)
  }
}

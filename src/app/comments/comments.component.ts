import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comments-list',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {


  
  @Input("comments") commentsList;

  constructor() { }

  ngOnInit() {
  }
}

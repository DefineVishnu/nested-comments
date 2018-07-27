export class CommentModel {
  parent?: number;
  id?: number;
  text?: string;
   subComments?: CommentModel[]
}



export const comments: CommentModel[] = [

  {
    parent: 0,
    id: 1,
    text: "1",
  },

  {
    parent: 1,
    id: 5,
    text: "1-1",
  },
  {
    parent: 5,
    id: 6,
    text: "1-1-1 "
  },


  {
    parent: 1,
    id: 7,
    text: "1-2",


  },
  {
    parent: 7,
    id: 8,
    text: "1-2-1"
  },

  {
    text: "2",
    parent: 0,
    id: 9,
  },

  {
    parent: 9,
    id: 10,
    text: "2-1",
  },

  {
    parent: 10,
    id: 11,
    text: "2-1-1"
  }

]
required scripts


  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

app-componnent 

 root comments are  got in  app commponent 
 (ie commens with parent 0)


 root comments are iterated in  app component
 and each comment is passed as input to comment-list component 



comment-list-component

  comment-list has a  input ("comment")
 

 

 on clicking show replies  sub coments got and displayed as subcomments 


each  subcomments are passed as input to comment-list component  again 





recursion  components 

 comments-list componets  is called again 

comments.ts 
 is used as input 



accordian is implemented

accordian is implemented using the above specified scripts

CommentModel 
id property id of comment 
parent id of parent comment 
text is for  text property
subComments => sub comments 





refferece 
https://netbasal.com/recursion-in-angular-components-1cd636269b12







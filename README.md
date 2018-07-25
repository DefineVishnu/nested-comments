nested comments used to show nested comments using component recursion




required scripts


  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>



  nested componet is comments component which is  called in the 
  app component  (ie : comment-list )

  comment-list has a  input ("comments")
 

 if  comments has subcoments (again  a comment property it shows show replie button)

 on clicking show replies  sub coments  are shown 


recursion  components 

 comments-list componets  is called again if  the input comment has 
 subcoments with  by passing this subcoments as comment input 

comments.ts 
 is used as input 



accordian in implemented

accordian in implemented using the above specified scripts

refferece 
https://netbasal.com/recursion-in-angular-components-1cd636269b12




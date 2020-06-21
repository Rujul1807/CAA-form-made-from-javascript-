class frontForm{
constructor(){
    this.input=createInput("Your email Id");
    this.start=createButton('Start');
    this.ques=createElement('h3')
    this.ques4=createElement('h3')
    this.ques2=createElement('h3')
    this.ques3=createElement('h3')
    this.answer1=createInput("Your answer");
    this.answer2=createInput("Your answer");
    this.answer3=createInput("Your answer");
    this.answer4=createInput("Your answer");
    this.submit=createButton('Submit');
     this.topic=createElement('h1');
     this.salut=createElement('h1');
    

}
hide(){
    this.input.hide();
    this.start.hide();
    this.ques.hide();
    this.ques4.hide();
    this.ques2.hide();
    this.ques3.hide();
    this.answer1.hide();
    this.answer2.hide();
    this.answer3.hide();
    this.answer4.hide();
    this.submit.hide();
     this.topic.hide();
}
display(){
//this.ques2.html("");
//this.ques3.html("");
 this.input.position(displayWidth/2-300,displayHeight/2-100);
 this.start.position(displayWidth/2-300,displayHeight/2-50);
 this.topic.html("CAA SURVEY QUESTIONNAIRE");
 this.topic.position(displayWidth/2-300,displayHeight/2-300);
  this.start.mousePressed(()=>{
  this.input.hide();
  this.start.hide();
  voter.email=this.input.value(); 
  
  this.ques.html("Do you support Citizenship Amendment Act 2019(CAA) in our country");
  this.ques.position(displayWidth/2-600,displayHeight/2-200);
  this.answer1.position(displayWidth/2-500,displayHeight/2-150); 

  this.ques2.html("Do yo think that there should be any change in the amendment,if yes,then what?");
  this.ques2.position(displayWidth/2-600,displayHeight/2-100);
  this.answer2.position(displayWidth/2-500,displayHeight/2-50);

  this.ques3.html("Do you think we need to have a National Register in India?");
  this.ques3.position(displayWidth/2-600,displayHeight/2); 
  this.answer3.position(displayWidth/2-500,displayHeight/2+100)
 
  
  this.ques4.html("What benefit CAA will provide to national security?");
  this.ques4.position(displayWidth/2-600,displayHeight/2+150);
  this.answer4.position(displayWidth/2-500,displayHeight/2+200);

  this.submit.position(displayWidth/2-300,displayHeight/2+250);
})  
 this.submit.mousePressed(()=>{
    voter.answer1=this.answer1.value();
    voter.answer2=this.answer2.value();
    voter.answer3=this.answer3.value();
    voter.answer4=this.answer4.value();  

    VotersCount+=1;
    voter.index=VotersCount;
    voter.update();
    voter.updateVoterCount(VotersCount);
    this.ques.hide();
    this.ques4.hide();
    this.ques2.hide();
    this.ques3.hide();
    this.answer1.hide();
    this.answer2.hide();
    this.answer3.hide();
    this.answer4.hide();
    this.submit.hide();
     this.topic.hide();
  
     this.salut.html("THANK YOU FOR PARTICIPATING IN THIS SURVEY");
     this.salut.position(displayWidth/2-300,displayHeight/2)

 })
 
}

}

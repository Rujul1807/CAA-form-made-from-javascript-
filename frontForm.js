class frontForm{
constructor(){
    this.input=createInput("your emailId");
    this.start=createButton('start');
    this.ques=createElement('h3')
    this.ques4=createElement('h3')
    this.ques2=createElement('h3')
    this.ques3=createElement('h3')
    this.answer1=createInput("your answer");
    this.answer2=createInput("your answer");
    this.answer3=createInput("your answer");
    this.answer4=createInput("your answer");
    this.submit=createButton('sumbit');
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
 this.topic.html("YOUR CAA FORM")
 this.topic.position(displayWidth/2-300,displayHeight/2-300);
  this.start.mousePressed(()=>{
  this.input.hide();
  this.start.hide();
  voter.email=this.input.value(); 
  this.ques.html("Do you support CAA for our country");
  this.ques.position(displayWidth/2-600,displayHeight/2-200);
  this.answer1.position(displayWidth/2-500,displayHeight/2-150); 

  this.ques2.html("Do yo think that there should be any change in the amendment");
  this.ques2.position(displayWidth/2-600,displayHeight/2-100);
  this.answer2.position(displayWidth/2-500,displayHeight/2-50);

  this.ques3.html("suppose you have a  very good muslim friend in town and he wants citizenship in our country do you think it is right for him  not to have a citizenship though he intends to do no harm ");
  this.ques3.position(displayWidth/2-600,displayHeight/2); 
  this.answer3.position(displayWidth/2-500,displayHeight/2+100)
 
  
  this.ques4.html("Do you think that CAA is important for our country");
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
  
     this.salut.html("THANKYOU FOR TRYING OUR FORM");
     this.salut.position(displayWidth/2-200,displayHeight/2)

 })
 
}

}
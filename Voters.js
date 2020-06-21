class Voters{
constructor(){
    this.index=null;
    this.answer1=null;
    this.answer2=null;
    this.answer3=null;
    this.answer4=null;
    this.email=null;
}
getVoterCount(){    
var VotersCountref=database.ref('VotersCount');
VotersCountref.on("value",(data)=>{
VotersCount=data.val();  
})
}
updateVoterCount(count){
database.ref('/').update({
    VotersCount:count
});
}
update(){
    var VotersIndex="Voters/Voter"+this.index;
    database.ref(VotersIndex).set({
        email:this.email,
       answer1:this.answer1,
       answer2:this.answer2,
        answer3:this.answer3,
        answer4:this.answer4
});
    }
 
}


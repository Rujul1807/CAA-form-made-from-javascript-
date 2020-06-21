var database;

var form;
var voter;
 var VotersCount;

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database=firebase.database();
form=new frontForm();
voter=new Voters();

}
function draw(){
    background(100);
    form.display();
    voter.getVoterCount();

}
 



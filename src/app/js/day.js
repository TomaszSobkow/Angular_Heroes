
var today = new Date();
var hourNow = today.hourNow;
var greetning;

if(hourNow > 18){
    greetning = 'Good evening';
}else if (hourNow < 12){
    greetning = 'Good morning';
}else if(hourNow > 0 ){
    greetning = 'Good morning';
}else{
    greetning = 'Hello!';
}
document.write(<h2>+ greetning</h2>);


function clock(){
    var today = new Date();

    var day = today.getDay();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var greetning;

    var hour = today.getHours();
    if(hour < 10) hour = "0"+hour;

    var minutes = today.getMinutes();
    if(minutes < 10) minutes = "0"+minutes;
    
    var seconds = today.getSeconds();
    if(seconds < 10) seconds = "0"+seconds;

   
        if(hourNow > 18){
            greetning = 'Good evening';
        }else if (hourNow < 12){
            greetning = 'Good morning';
        }else if(hourNow > 0 ){
            greetning = 'Good morning';
        }else{
            greetning = 'Hello!';
        }

    document.getElementById("wrapper").innerHTML = 
          day+"/"+month+"/"+year+" | "+
          hour+":"+minutes+":"+seconds + ""+ greetning;

    setTimeout("clock()",1000);
}
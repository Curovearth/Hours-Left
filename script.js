//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
//here month starts from 0(jan) and ends at 11(dec)


//Building a function to update the countdown in every milisecond

var x = setInterval(function(){
    var c = new Date("Aug 4, 2025 20:55");
    var d = new Date();     //creating an object for the date i.e., todays' date
    // var c = new Date("Dec 21, 2021 ");       //rough date of new year
    var diff = c-d;     //returns the number of miliseconds left
    
    var days = Math.floor(diff/(24*60*60*1000));
    var hours = Math.floor(diff%(24*60*60*1000)/(60*60*1000));
    var minutes = Math.floor(diff%(60*60*1000)/(60*1000));
    var seconds = Math.floor(diff%(60*1000)/(1000));
    // var milliseconds = Math.floor(diff%(1000))
    document.getElementById("demo").innerHTML=days+"d "+hours+"h "+minutes+"m "+seconds+"s";
},1);



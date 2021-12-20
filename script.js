

//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
//here month starts from 0(jan) and ends at 11(dec)




//Building a function to update the countdown in every milisecond

var x = setInterval(function(){
    var c = new Date("Aug 4, 2025 22:15");
    var d = new Date();   //creating an object for the date i.e., todays' date
    // var c = new Date(2022,0,1);       //rough date of new year

    var diff = c.getTime()-d.getTime();     //returns the number of miliseconds left
    document.getElementById("demo").innerHTML=diff;
},1);



const d = new Date();   //creating an object for the date
document.getElementById("hours").innerHTML=d;

//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
//here month starts from 0(jan) and ends at 11(dec)
const c = new Date(2030,7,4,22,15,0);
document.getElementById("hours2").innerHTML=c;
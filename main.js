//var n = document.getElementById("n1").value;
function run(){ 
var n = document.getElementById("n1").value;   
if (n % 2 == 1)
{console.log("n is odd");
document.getElementById("answer").innerHTML="1";
}
else if (n % 2 == 0 && (n>= 2 && n <= 5))
    {console.log("n is even and in the inclusive range of 2 to 5");
document.getElementById("answer").innerHTML="0";
}
 
else if (n % 2 == 0 &&( n>= 6 && n <= 20))
    {console.log("n is even and in the inclusive range of 6 to 20");
document.getElementById("answer").innerHTML="1";
}
 
else if(n % 2 == 0 &&n > 20)
    {console.log("n is even and greater than 20");
document.getElementById("answer").innerHTML="0";
}
}


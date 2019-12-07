function myfunction() {
        var make , text;
        make= document.getElementById("numb").value;
        if (isNaN(make) || make < 1 || make > 10) {
            text="your input is invalid";
            
        }
       else{
           text='your input is ok';
       }

       document.getElementById("demo").innerHTML= text;
}
var x,y;
x=8;
y=9;



function tocelcius(f) {
    return(5/6)*(50-32); 
}
document.getElementById("demo").innerHTML=tocelcius;
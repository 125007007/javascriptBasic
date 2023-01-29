function myFunc(){
    //document.getElementById("p1").innerHTML = "hanged by JS";
    return 1;
}

var x = 10;
var y = 'string'

var res = myFunc(); //func calling

//console.log(res)
//alert(res);
//document.write(res);

function onButtonClicked(){
    document.getElementById("p1").innerHTML = "hanged by JS";
}


// literal object
var emp = {
    name: 'bob',
    id: 10101
}


var emp2 = new Object();
emp2.id = 101;
emp2.name = 'bob1';

console.log(emp2.name);
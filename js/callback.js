function one(bob){
    console.log('func one called');
    bob();
}

function two(){
    console.log("func two called");
}

one(two);
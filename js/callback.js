function one(callback){
    console.log(callback);
    callback();
}

function two(){
    console.log("func two called");
}

one(two);
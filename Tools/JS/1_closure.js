function result(x){
    var n = 0
    function closure(){
        n++;
        return n
    }

    for(let i=0; i<x; i++){
        console.log(closure());
    }

}
//n is number of calls
console.log(result(5))
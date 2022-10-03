function output(){
    const arr = [1,2,3]
    for(var i=0;i<arr.length;i++){
    setTimeout(function(){
    console.log(`index: ${i}, element is ${arr[i]}`)
    },10)
}
}
console.log(output())
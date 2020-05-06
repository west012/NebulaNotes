// Loops are handy in coding(not just Javascript)
// A loop counts through items and executes them
for(var counter = 0; counter <5; counter++){
    console.log(`Loop Number${counter}`);
    // ctrl + d to change all the values and then esc
}
console.log("This is a github test");
var x =5;
var y =0;
for (var i =0; i<10; i++){
    console.log(`loop number ${i}`);
    if(i>7){
        break;
    }else{
        continue;
    }
}
var arr =[`Cathy-`,`Deborah-`,`Desmond-`,`Mary-`];
for(var i =0; i<arr.length;i++){
    var splitName = arr[i];
    splitName = splitName.replace('-','!');
    console.log(splitName);
    splitName=splitName.split('');

}console.log(splitName);

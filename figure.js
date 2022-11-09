let num = 5;

let line = 1;
let row = 1;
let plus = "";

while(line <= num){
    plus += "+";
    line ++;
}
while(row <= num){
    console.log(plus);
    row ++;
}
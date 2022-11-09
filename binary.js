let num = 55;

let dec = num;
let bin =0;
let bin1 = 1;

while (dec) {
    bin += dec%2*bin1;
    dec = Math.floor(dec/2);
    bin1 = bin1*10;
}

console.log("Binary of " + num + " is equal to " + bin);
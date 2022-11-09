const arr = [1, 2, 3, 4, 5]

let reverse = [];

for (let index = arr.length - 1; index >= 0; index --) {
    reverse.push(arr[index]);
}

console.log(reverse)
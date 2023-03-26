const arr = [1, 1, 1, 1, 1, 1];
let duplicateNumber = true;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
        duplicateNumber = false;
    }
}
console.log(duplicateNumber)
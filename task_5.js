let atomicArr = ['Sechenov', 'Vovchik', 'Petrov', 'Filatova', 'Petrov', 'Molotov', 'Pavlov', 'Tereshkova', 'Twins'];
let str = ' ';
for (let i = 0; i < atomicArr.length; i++ ) {
    if (atomicArr[i] !== undefined) str += i + ' - '+ atomicArr[i] + '<br>';
}
console.log(atomicArr);
console.log(atomicArr.length);
console.log(str);
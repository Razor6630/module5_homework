let atomicHeart = new Map();
atomicHeart.set('name', 'Atomic Heart');
atomicHeart.set('Year of release', 2023);
atomicHeart.set('The game process is completed?', true);
console.log(atomicHeart.size)
for (let name of atomicHeart.keys()){
    console.log(name);
}
for (let description of atomicHeart.values()) {
    console.log(description)
}
for (let elem of atomicHeart) {
    console.log(elem)
}
for (let pair of atomicHeart) {
    console.log(`ключ - ${pair[0]}, значение - ${pair[1]}`)
}
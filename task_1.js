numberResult = +prompt('Please, enter the number:');
console.log(typeof numberResult);
console.log(isNaN(numberResult));
if (numberResult !== 'number' && isNaN(numberResult)) {
    console.log('Упс, кажется Вы ошиблись')
} else if (numberResult % 2 === 0) {
    console.log('Число является четным')
} else  {
    console.log('Число является нечетным')
}
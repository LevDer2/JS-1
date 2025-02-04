const age = 12;
console.log(age);
const name = "Lev";
console.log(name);
const isStudent = true;
console.log(isStudent);
const myString = "How often have I told you that when you create everything impossible, then everything that matters, Why, no matter how incredible it is, must be true?";
console.log(myString);
const a = 2002;
const myNumber = a + 10;
console.log(myNumber);
const myNull = null;
console.log(myNull);
const userName = prompt("Введіть своє ім'я");
console.log(userName);
alert(`Вітаємо, ${userName}!`);
const userAnswer = confirm("Ви дійсно хочете покинути сторінку?")
if (userAnswer) {
    alert("Дякую за підтвердження!")
}
else {
    alert("Увага! Дія може бути небезпечною.");
    confirm("Ви впевнені, що хочете продовжити?");
    if (userAnswer) {
        alert("Дія підтвердженна!");
    }
    else {
        alert ("Дію відмінено!");
    }
}
console.log(userAnswer);

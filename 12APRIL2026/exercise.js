let number1, number2;
number1 = Number(prompt("Enter a number: "));
number2 = Number(prompt("Enter a second number: "));

if (number1 > number2) {
    console.log(`${number1} is bigger than ${number2}`)
} else {
    console.log(`${number2} is bigger than ${number1}`)
}
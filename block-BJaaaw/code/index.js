// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num=Number(prompt(`Enter a Number`));
if (num % 2 === 0) {
alert(`number is even`);
} else {
  alert(`number is odd`);
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1=prompt(`Enter first number`);
let num2=prompt(`Enter second number`);
if (num1 > num2) {
  alert(`max value ${num1}`);
} else {
  alert(`max value ${num2}`);
}
// 3. Convert the above code using`?` terniary operator
(num1>num2) ? alert(`maximum value ${num1}`) : alert(`maximum value ${num2}`) ;
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let house=String(prompt(`Enter your house name`));
if (house==="stark") {
  alert(`Winter is coming`);
}else if (house==="lannister") {
  alert(`A lannister always pays his debt`);
} 
else {
  alert(`All men must die`);
} 

// 5. Convert the above code using`?` terniary operator
(house==="stark") ? alert(`Winter is coming`) : ((house==="lannister") ? alert(`A lannister always pays his debt`) : alert(`All men must die`)) ; ;


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month=Number(prompt(`Enter month number`));
switch (true) {
  case ((month===1) || (month===3) || (month===5) || (month===7) || (month===8) || (month===10) || (month===12) ):
  alert(`number of days 31`);
  break;
  case ((month===4) || (month===6) || (month===9) || (month===11)):
  alert(`number of days 31`);
  break;
  case (month===2):
  alert(`Number of days 28`);
}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salery=Number(prompt(`Enter your salery`));
switch (true) {
  case salery<=20000:
    alert(`Your Inhand Salery is ${salery-salery*10/100}`);
    break;
  
  case salery>=20000 && salery<=40000:
      alert(`Your Inhand Salery is ${salery-salery*20/100}`);
      break;

  case salery>50000:
        alert(`Your Inhand Salery is ${salery-salery*30/100}`);
        break;
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks=Number(prompt(`Enter Marks`));
if (marks>100) {
  alert(`Marks can't be greater than 100`);
} else {
  switch (true) {
    case marks>80 && marks<100 :
      alert(`Grade A`);
      break;

    case marks>50 && marks<80 :
      alert(`Grade B`);
      break;

    case marks>30 && marks<50 :
      alert(`Grade C`);
      break;

    case marks>0:
      alert(`Grade D`);
      break;
  }
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather=String(prompt(`What is the weather like outside?`));
switch (true) {
  case weather==="sunny":
    alert(`Wear a T-shirt`);
    break;
  case weather==="rainy":
    alert(`Don't forget to take your raincoat`);
    break;
      case weather==="hot":
    alert(`Get a hanky`);
    break;
    case weather==="freezing":
    alert(`Get your sweeter on`);
    break;
    default:
      alert(`Not a valid input`);
}

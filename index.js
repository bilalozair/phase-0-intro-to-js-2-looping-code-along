// Code your solutions in this file
for (let age = 40; age < 50; age++) {
    console.log(`Hi, I am ${age} years old.`)
debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["danial", "Bilal", "Nauman"];
const occasion = "birthday";
function writeCards(names, event) {
    const messages = [];
    //console.log(messages);
    for (let i = 0; i < names.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return messages;
}
console.log(writeCards(names,occasion));

function countDown (number) {
   let counter = number;
   while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}
countDown(20);
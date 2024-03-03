// Code your solutions in this file
for (let age = 30; age< 40; age++) {
    console.log(`I'm ${age} yeard old. Happy birthday to me!!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(namesArray, eventName) {
    let cards = [];
    for (let i = 0; i < namesArray.length; i++) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
   console.log(i)
    }
    return cards;
}

function countDown(){
let countDown = 10;
while (countDown >= 0) {
    console.log(countDown--);
}
}


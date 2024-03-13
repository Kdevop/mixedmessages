// Array's of characters, deaths and final words.
const character = ['Dramp', 'Bearpaw', 'Dynamo'];
const death = ['were shot by arrows saving the one they loved', 'had their mind eaten by a monster', 'were sucked into the void to face death himself'];
const lastWords = ['It was all worth it, even at the end!', 'I will always be with you!', 'What! I dont understand... I am too handsome!'];

// random number creater
const randNum = (array) => {
    return Math.floor(Math.random() * array.length);
} 

// global variables to create randomness 
    let who = character[randNum(character)];
    let how = death[randNum(death)];
    let saying = lastWords[randNum(lastWords)];

// putting it to together
const msg = () => {
    let newMsg = `Im affraid your character ${who} has died! Our reports are they they ${how}. Their last words were - ${saying}`;
    return newMsg;
};

console.log(msg());
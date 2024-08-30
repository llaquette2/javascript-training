// FOR LOOPS
/*
// normal for loops
// for(let i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }

// console.log('loop finished');

const names = ['landon', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++) {
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// while loops
const names = ['landon', 'mario', 'luigi'];
// let i = 0;

// while(i < 5) {
//     console.log('in loop:', i);
//     i++;
// }

let i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// do while loops
let i = 3;

do {
    console.log('val of i is: ', i);
    i++;
} while(i < 5);

// CONDITIONAL STATEMENTS

// if statements
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['landon', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 4) {
//     console.log("that's a lot of ninjas");
// }

const password = 'p@ssword';

if(password.length >= 8) {
    console.log('that password is long enough!');
}

// else if statements

const password = 'p@ss';

if(password.length >= 12) {
    console.log('that password is mighty strong');
} else if(password.length >= 8) {
    console.log('that password is long enough!');
} else {
    console.log('password is not long enough');
}

// logical operators - OR || and AND &&

const password = 'p@ss12';

if(password.length >= 12 && password.includes('@')) {
    console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length > 5) {
    console.log('that password is strong enough!');
} else {
    console.log('password is not strong enough');
}

// logical NOT (!)

let user = false;

if(!user) {
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++) {

    if(scores[i] === 0) {
        continue;
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100) {
        console.log('congrats, you got the top score!');
        break;
    }
}

// switch statements
const grade = 'P';

switch(grade) {
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}
*/
// variables & block scope
const age = 30;

if(true) {
    const age = 40;
    const name = 'landon';
    console.log('inside 1st code block: ', age, name);

    if(true) {
        const age = 50;
        console.log('inside 2nd code block: ', age);
    }
}

console.log('outside code block: ', age, name);
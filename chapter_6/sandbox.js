// query selector
/*
// const para = document.querySelector('body > h1');

// console.log(para);

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//     console.log(para);
// });

console.log(errors);

// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);


// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras[1]);

// changing text and html
const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome!';

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>this is a new h2</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

// getting and setting attributes
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green');

// adding and removing properties
const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';
*/
// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// my attempt at the challenge
// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     if(para.innerText.includes('success')) {
//         para.classList.add('success');
//     }
//     else if(para.innerText.includes('error')) {
//         para.classList.add('error');
//     }
// });

// video version of challenge
const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('error')) {
        p.classList.add('error');
    }
    if(p.innerText.includes('success')) {
        p.classList.add('success');
    }
});

// toggle classes
const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');


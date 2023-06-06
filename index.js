const thatBod = document.body;
// const theBackground = document.createElement('div');
const countDown = document.createElement('div');
const titleName = document.createElement('div')
const formBox = document.createElement('div');
const thatForm = document.createElement('form');
const doUKnow = document.createElement('h3');
const uKnow1 = document.createElement('button');
const uKnow2 = document.createElement('button');
const uKnow3 = document.createElement('button');
const uKnow4 = document.createElement('button');
const toTheRight = document.createElement('button');

// thatBod.appendChild(theBackground);
thatBod.appendChild(formBox);
formBox.appendChild(thatForm);
thatForm.appendChild(doUKnow);
thatForm.appendChild(uKnow1);
thatForm.appendChild(uKnow2);
thatForm.appendChild(uKnow3);
thatForm.appendChild(uKnow4);
thatForm.appendChild(toTheRight);


thatBod.setAttribute(
    'style',
    'height: 100vh; width: 100%; background: #c4c4c4; display: flex; justify-content: center; align-items: center;'
);

formBox.setAttribute(
    'style',
    'height: 40rem; width: 35rem; background: #f08080; border-radius: 10px'
);

thatForm.setAttribute(
    'style',
    'height: 40rem; width: 35rem background: #8b0000'
);

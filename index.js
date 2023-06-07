const thatBod = document.body;
// const theBackground = document.createElement('div');
const countDown = document.createElement('div');
const titleName = document.createElement('div')
const formBox = document.createElement('div');
const thatForm = document.createElement('form');
const doUKnow = document.createElement('h3');
const ansBox = document.createElement('div');
const uKnow1 = document.createElement('button');
const uKnow2 = document.createElement('button');
const uKnow3 = document.createElement('button');
const uKnow4 = document.createElement('button');
const toTheRight = document.createElement('button');

// thatBod.appendChild(theBackground);
thatBod.appendChild(formBox);
formBox.appendChild(thatForm);
thatForm.appendChild(doUKnow);
thatForm.appendChild(ansBox);
ansBox.appendChild(uKnow1);
ansBox.appendChild(uKnow2);
ansBox.appendChild(uKnow3);
ansBox.appendChild(uKnow4);
thatForm.appendChild(toTheRight);

// doUKnow.textContent = '';
// uKnow1.textContent = '1969';
// uKnow2.textContent = '1999';
// uKnow3.textContent = '1979';
// uKnow4.textContent = '1995';
toTheRight.textContent = 'Next Question';

const questions = [
    {
        question: 'What year was JavaScript created?',
        answers: [
            {text: '1969', correct: false},
            {text: '1999', correct: false},
            {text: '1979', correct: false},
            {text: '1995', correct: true}
        ]
    },
    {
        question: 'Why is ES6 used?',
        answers: [
            {text: 'Makes code short but hard to read', correct: false},
            {text: 'Allows you to code less and do more', correct: true},
            {text: 'So frontend can be easily accessible', correct: false},
            {text: 'To make you a better programmer', correct: false}
        ]
    },
    {
        question: 'Which is considered a high-level language?',
        answers: [
            {text: 'PYTHON', correct: true},
            {text: 'HTML', correct: false},
            {text: 'C#', correct: false},
            {text: 'CSS', correct: false}
        ]
    },
    {
        question: 'What is the function of an array?',
        answers: [
            {text: 'To make coding easier', correct: false},
            {text: 'To store multiple data in one location', correct: true},
            {text: 'To pass on methods', correct: false},
            {text: 'To store data where it is not needed', correct: false}
        ]
    }
];

thatBod.setAttribute(
    'style',
    'height: 100vh; width: 100%; background: #c4c4c4; display: flex; justify-content: center; align-items: center'
);

formBox.setAttribute(
    'style',
    'height: 40rem; width: 35rem; background: #f08080; border-radius: 7px; display: flex; justify-content: center; align-items: center'
);

thatForm.setAttribute(
    'style',
    'height: 30rem; width: 20rem; background: #8b0000; display: flex; flex-direction: column; justify-content: center; align-items: center'
);

doUKnow.setAttribute(
    'style',
    'position: relative; bottom: 4rem; color: #ffffff'
);

ansBox.setAttribute(
    'style',
    'height: 15rem; width: 18rem; display: flex; flex-direction: column'
);

uKnow1.setAttribute(
    'style',
    'background: #e9967a; margin-bottom: 0.5rem; height: 3rem; border-radius: 5px; font-size: 15px'
);

uKnow2.setAttribute(
    'style',
    'background: #e9967a; margin-bottom: 0.5rem; height: 3rem; border-radius: 5px; font-size: 15px'
);

uKnow3.setAttribute(
    'style',
    'background: #e9967a; margin-bottom: 0.5rem; height: 3rem; border-radius: 5px; font-size: 15px'
);

uKnow4.setAttribute(
    'style',
    'background: #e9967a; margin-bottom: 0.5rem; height: 3rem; border-radius: 5px; font-size: 15px'
);

toTheRight.setAttribute(
    'style',
    'background: #cd5c5c; position: relative; top: 3rem; height: 2rem; width: 15rem; border-radius: 5px; font-size: 15px'
);


uKnow1.addEventListener('mouseover', (colorChange) => {
    colorChange.target.style.background = '#ffa07a';

    setTimeout(() => {
        colorChange.target.style.background = '#e9967a';
    }, 600);
});

uKnow2.addEventListener('mouseover', (colorChange) => {
    colorChange.target.style.background = '#ffa07a';

    setTimeout(() => {
        colorChange.target.style.background = '#e9967a';
    }, 600);
});

uKnow3.addEventListener('mouseover', (colorChange) => {
    colorChange.target.style.background = '#ffa07a';

    setTimeout(() => {
        colorChange.target.style.background = '#e9967a';
    }, 600);
});

uKnow4.addEventListener('mouseover', (colorChange) => {
    colorChange.target.style.background = '#ffa07a';

    setTimeout(() => {
        colorChange.target.style.background = '#e9967a';
    }, 600);
});

// function naruto() {
//     if()
// }


//DOM elements
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const rateText = document.getElementById('rateText')
const submitBtn = document.querySelector('.btn');
const rateCard = document.querySelector('.rate-card');
const thankYouCard = document.querySelector('.thank-you-card');

let rating = 0;



// Event listeners
one.addEventListener('click', () => rating = 1);
two.addEventListener('click', () => rating = 2);
three.addEventListener('click', () => rating = 3);
four.addEventListener('click', () => rating = 4);
five.addEventListener('click', () => rating = 5);


submitBtn.addEventListener('click', () => {
    rateCard.style.display = 'none';
    thankYouCard.style.display = 'flex';
    rateText.innerText = `You selected ${rating} out of 5`;
})
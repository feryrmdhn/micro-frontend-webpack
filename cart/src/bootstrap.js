import faker from 'faker'; // 5.0.0 this different version on another file

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.querySelector('#cart-dev').innerHTML = cartText;

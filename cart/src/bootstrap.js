import faker from 'faker'; // 5.0.0 this different version with another file

const mount = (el) => {

    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;


    el.innerHTML = cartText
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#cart-dev')

    if (el) mount(el)
}

export { mount }

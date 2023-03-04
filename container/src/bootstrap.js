import { mount } from 'products/ProductsIndex' //from modulefederation of object remotes.products
import 'cart/CartShow' //from modulefederation of object remotes.cart

console.log('Container')

mount(document.querySelector('#my-products'))
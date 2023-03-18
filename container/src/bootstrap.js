import { mount as productMount} from 'products/ProductsIndex' //from modulefederation of object remotes.products
import { mount as cartMount } from 'cart/CartShow' //from modulefederation of object remotes.cart

console.log('Container')

productMount(document.querySelector('#my-products'))
cartMount(document.querySelector('#my-cart'))
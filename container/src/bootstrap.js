import {mount} from "products/ProductsIndex"
import {mountCart} from "cart/CartShow"
console.log("Container");
const el=document.querySelector('#my-products')
mount(el)
const el1=document.querySelector('#my-cart')
mountCart(el1)
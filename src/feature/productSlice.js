import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart"));
console.log("savedCart",savedCart);

const initialState = {
    cart: {
        cartItems:  savedCart && savedCart.cartItems  || [],
        totalQuantity: savedCart && savedCart.totalQuantity || 0, 
        totalAmount: savedCart&& savedCart.totalAmount || 0
    },
    products: [],
}
console.log("initialState cart", initialState.cart);
const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        saveProducts: (state, action) => {
            state.products = action.payload;
        },
        incrementQty: (state, action) => {
            const product = action.payload;
            const cart = state.cart
            const existingItem = cart.cartItems.find(obj => obj.id === product.id)
            if (existingItem) {
                existingItem.quantity += 1;
               cart.totalQuantity += 1;
               cart.totalAmount = cart.totalAmount + product.price;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        decrementQty: (state, action) => {
            const product = action.payload;
            const cart = state.cart
            const existingItem = cart.cartItems.find(obj => obj.id === product.id)
            if (existingItem && existingItem.quantity > 0) {
                existingItem.quantity -= 1;
                cart.totalQuantity  =0;
                cart.totalAmount = 0;
                cart.cartItems.map(item=>{
                 cart.totalQuantity = cart.totalQuantity+ item.quantity;
                 cart.totalAmount = cart.totalAmount+ (item.quantity*existingItem.price);
            })        
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        removeProduct: (state, action) => {
            const product = action.payload;
            const cart = state.cart;
            console.log("cartItems before ", cart.cartItems);
            state.cart.totalQuantity = state.cart.totalQuantity - product.quantity;
            state.cart.totalAmount = state.cart.totalAmount - (product.quantity * product.price);
            cart.cartItems = cart.cartItems.filter(pro => pro.id !== product.id)
            console.log("cartItems after ", cart.cartItems);

            localStorage.setItem("cart", JSON.stringify(state.cart))
        },

        addToCart: (state, action) => {
            const product = action.payload;
            const cart = state.cart
            //action have complete product obj
            const existingItem = cart.cartItems.find(obj => obj.id === product.id)
            if (existingItem) {
                existingItem.quantity += 1
                cart.totalQuantity = cart.totalQuantity + 1;
                cart.totalAmount = cart.totalAmount + product.price;
            } else {
                cart.cartItems = [...cart.cartItems, action.payload];
                cart.totalQuantity = cart.totalQuantity + 1;
                cart.totalAmount = cart.totalAmount + product.price;
            }
        }
    }
})
export default productSlice.reducer;
export const { saveProducts, addToCart, incrementQty, decrementQty, removeProduct, } = productSlice.actions; 
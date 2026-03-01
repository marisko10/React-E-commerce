import {createContext, useState, useEffect } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart , setCart] = useState(() => {
        const savedcart = localStorage.getItem("cart");
        return savedcart ? JSON.parse(savedcart) : [];
    })
    


function addToCart(product) {
    setCart([...cart, { ...product , cartId: Date.now() }]); 
}

useEffect( () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])


function removeFromCart(id) {
    setCart(cart.filter(item => item.cartId !== id));
}

function clearCart () {
    setCart([]);
}



const quantity = cart.length;

const total = cart.reduce((acc, item) => acc + item.price, 0);


    

return (
    <CartContext.Provider
    value = {{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        quantity,
        total,
        
    }}>
    {children}
</CartContext.Provider>
);
}


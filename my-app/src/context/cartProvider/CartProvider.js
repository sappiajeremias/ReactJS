
import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarProducto = (item, cant) => {
        if (estaEnCarrito(item.id)) {
            setCart(cart.map((prod) => {
                return prod.id === item.id ? { ...prod, cant: prod.cant + cant } : prod
            }));
        } else {
            setCart([...cart, { ...item, cant: cant }])
        }
    }

    const limpiarCarrito = () => setCart([]);

    const estaEnCarrito = (idProd) => {
        return cart.find(prod => prod.id === idProd ? true : false);
    }

    const sacarProducto = (idProd) => {
        return setCart(cart.filter(prod => prod.id !== idProd));
    }

    const precioTotal = () =>
        cart.reduce((antes, actual) => antes + actual.cant * actual.price, 0);


    const productosTotal = () =>
        cart.reduce((total, prodActual) => total + prodActual.cant, 0);


    return (
        <CartContext.Provider value={{
            limpiarCarrito,
            estaEnCarrito,
            sacarProducto,
            agregarProducto,
            precioTotal,
            productosTotal,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;
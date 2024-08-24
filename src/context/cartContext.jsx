import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (item, quantity) => {
        if (enElCarro(item.id)) {
            setCart(
                cart.map((product) =>
                    product.id === item.id
                        ? { ...product, cantidad: product.cantidad + quantity }
                        : product
                )
            );
        } else {
            setCart([...cart, { ...item, cantidad: quantity }]);
        }
    };

    const enElCarro = (id) => {
        return cart.some((item) => item.id === id);
    };

    const itemQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0);
    };

    const total = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
    };

    const vaciarCarro = () =>{
        setCart([]);
    };

    const eliminarItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };


    return (
        <CartContext.Provider value={{ 
            cart, 
            setCart,
            agregarAlCarrito,
            enElCarro,
            itemQuantity,
            total,
            vaciarCarro,
            eliminarItem,
        }}>
            {children}
        </CartContext.Provider>
    );
};

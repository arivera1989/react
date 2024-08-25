import React, { useState, useContext } from "react";
import { db } from "../../services/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { CartContext } from "../../context/cartContext";
import './Checkout.css'

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [domicilio, setDomicilio] = useState("");
    const [pedidoid, setPedidoid] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [errors, setErrors] = useState({});
    const { cart, setCart } = useContext(CartContext);

    const ordenFormateada = {
        pedido: cart,
        comprador: nombre,
        email,
        domicilio,
    };

    const validate = () => {
        const newErrors = {};
        
        if (nombre.length < 5) {
            newErrors.nombre = "El nombre debe tener al menos 5 caracteres.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "El correo electrónico no es válido.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validate()) {
            return;
        }

        setEnviando(true);
        try {
            const ordenRef = collection(db, "ordenes");
            const ordenId = await addDoc(ordenRef, ordenFormateada);
            setCart([]);
            setPedidoid(ordenId.id);
        } catch (error) {
            console.error("Error al enviar la orden:", error);
        } finally {
            setEnviando(false);
        }
    };

    if (pedidoid) {
        return (
            <div className="contenedor-check">
                <h3>Gracias por tu compra! ❤️​</h3>
                <h4>Tu pedido lo identificamos con el siguiente código:</h4>
                <h4>👉​ {pedidoid} 👈</h4>
                <h4>En breve nos pondremos en contacto 😊​</h4>
            </div>
        );
    }

    return (
        <div className="contenedor-check">
            {enviando ? (
                <div>
                    <h2>Confirmando pedido 😉</h2>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <p>Nombre y apellido</p>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}

                    <p>Email</p>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                    <p>Domicilio de entrega</p>
                    <input
                        type="text"
                        value={domicilio}
                        onChange={(e) => setDomicilio(e.target.value)}
                    />
                    <button className="btn-confirmar" type="submit">Confirmar pedido</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;

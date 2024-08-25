import React, { useState, useContext } from "react"
import { db } from "../../services/firebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { CartContext } from "../../context/cartContext"

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [domicilio, setDomicilio] = useState("")
    const [pedidoid, setPedidoid] = useState("")
    const [enviando, setEnviando] = useState(false)
    const { cart, setCart } = useContext(CartContext)

    const ordenFormateada = {
        pedido: cart,
        comprador: nombre,
        email,
        domicilio
    }


 const handleSubmit= async (e) => {
        e.preventDefault()
        setEnviando(true)
        const ordenRef = collection(db, "ordenes")
        const ordenId = await addDoc(ordenRef, ordenFormateada)
        setCart([])
        setPedidoid(ordenId.id)
        setEnviando(false)
    }

    if(pedidoid){
        return (
        <>
            <h3>Gracias por tu compra! ❤️​</h3>
            <h4>Tu pedido lo identificamos con el siguiente código:</h4>
            <h4>👉​ {pedidoid} 👈</h4>
            <h4>En breve nos pondremos en contacto 😊​</h4>
        </>
        )
    }

    return (
        <div>
            {enviando ? (
                <div>
                    <h2>Confirmando pedido 😉</h2>
                </div>
            ) : (
                <form onSubmit={(e) => handleSubmit(e)}>
                    <p>Nombre y apellido</p>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                    <p>Email</p>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    <p>Domicilio de entrega</p>
                    <input type="text" onChange={(e) => setDomicilio(e.target.value)} />
                    <button type="submit">Confirmar pedido</button>
                </form>
            )}
        </div>
    );    
}

export default Checkout
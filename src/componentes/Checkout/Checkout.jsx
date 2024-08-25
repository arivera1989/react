import React, { useState } from "react"
import { db } from "../../services/firebaseConfig"
import { addDoc } from "firebase/firestore"

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [domicilio, setDomicilio] = useState("")

 const handleSubmit=(e)=> {
        e.preventDefault()
        addDoc()
    }

    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <p>Nombre y apellido</p>
                <input type="text" onChange={(e)=> setNombre(e.target.value)} />
                <p>Email</p>
                <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
                <p>Domicilio de entrega</p>
                <input type="text" onChange={(e)=> setDomicilio(e.target.value)}/>
                <button type="submit">Confirmar pedido</button>
            </form> 
        </div>
    )
}

export default Checkout
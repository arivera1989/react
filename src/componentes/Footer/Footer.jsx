import React from 'react'
import './Footer.css'

const Footer = () => {
    const fecha = new Date().getFullYear();
    return (
        <div className="footer">
            <p>{fecha} - Designed by Alexis Rivera for Tienda Kisa</p>
        </div>
    )
}

export default Footer
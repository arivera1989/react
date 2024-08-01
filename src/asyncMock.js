const items = [
    // Calzado
    {id: 1, nombre: "Zapatilla Deportiva", image:"./img/zapatilla_deportiva.jpg", precio: 50000, desc: "Zapatilla cómoda para correr", stock: 15, categoria: "calzado"},
    {id: 2, nombre: "Botas de Montaña", image:"./img/botas_montania.jpg", precio: 120000, desc: "Botas impermeables para trekking", stock: 8, categoria: "calzado"},
    {id: 3, nombre: "Sandalias", image:"./img/sandalias_verano.jpg", precio: 25000, desc: "Sandalias de verano", stock: 25, categoria: "calzado"},
    {id: 4, nombre: "Zapatos de Vestir", image:"./img/zapatos_vestir.jpg", precio: 75000, desc: "Zapatos elegantes para ocasiones formales", stock: 5, categoria: "calzado"},
    {id: 5, nombre: "Zapatillas de Skate", image:"./img/zapatillas_skate.jpeg", precio: 60000, desc: "Zapatillas duraderas para skate", stock: 12, categoria: "calzado"},
    {id: 6, nombre: "Chanclas", image:"./img/chanclas.png", precio: 15000, desc: "Chanclas para la playa", stock: 20, categoria: "calzado"},
    {id: 7, nombre: "Mocasines", image:"./img/mocasines.webp", precio: 55000, desc: "Mocasines de cuero", stock: 10, categoria: "calzado"},
    {id: 8, nombre: "Botines", image:"./img/botines.jpg", precio: 65000, desc: "Botines de moda", stock: 18, categoria: "calzado"},
    {id: 9, nombre: "Pantuflas", image:"./img/pantuflas.webp", precio: 20000, desc: "Pantuflas cálidas para invierno", stock: 30, categoria: "calzado"},
    {id: 10, nombre: "Zapatillas de Tenis", image:"./img/zapatillas_tenis.jpg", precio: 70000, desc: "Zapatillas para jugar al tenis", stock: 7, categoria: "calzado"},

    // Electrónica
    {id: 11, nombre: "Smartphone", image:"./img/smartphone.jpg", precio: 250000, desc: "Teléfono inteligente de última generación", stock: 10, categoria: "electrónica"},
    {id: 12, nombre: "Laptop", image:"./img/laptop.png", precio: 500000, desc: "Laptop ligera y potente", stock: 5, categoria: "electrónica"},
    {id: 13, nombre: "Auriculares Inalámbricos", image:"./img/auri_inal.webp", precio: 60000, desc: "Auriculares con cancelación de ruido", stock: 20, categoria: "electrónica"},
    {id: 14, nombre: "Smartwatch", image:"./img/smart.jpeg", precio: 80000, desc: "Reloj inteligente con monitor de actividad", stock: 15, categoria: "electrónica"},
    {id: 15, nombre: "Cámara Fotográfica", image:"./img/camara.jpg", precio: 300000, desc: "Cámara DSLR profesional", stock: 3, categoria: "electrónica"},
    {id: 16, nombre: "Tablet", image:"./img/tablet.png", precio: 180000, desc: "Tablet con pantalla retina", stock: 8, categoria: "electrónica"},
    {id: 17, nombre: "Consola de Videojuegos", image:"./img/consola.webp", precio: 400000, desc: "Consola de última generación", stock: 6, categoria: "electrónica"},
    {id: 18, nombre: "Televisor 4K", image:"./img/tv_4k.jpg", precio: 450000, desc: "Televisor 4K Ultra HD", stock: 4, categoria: "electrónica"},
    {id: 19, nombre: "Cámara de Seguridad", image:"./img/cam_seg.webp", precio: 120000, desc: "Cámara de seguridad con visión nocturna", stock: 15, categoria: "electrónica"},
    {id: 20, nombre: "Altavoz Bluetooth", image:"./img/altavoz.jpg", precio: 45000, desc: "Altavoz portátil con sonido envolvente", stock: 25, categoria: "electrónica"},

    // Hogar
    {id: 21, nombre: "Sofá", image:"./img/sofa.webp", precio: 200000, desc: "Sofá de 3 plazas con cojines", stock: 2, categoria: "hogar"},
    {id: 22, nombre: "Mesa de Comedor", image:"./img/mesa_comedor.jpg", precio: 150000, desc: "Mesa de comedor para 6 personas", stock: 5, categoria: "hogar"},
    {id: 23, nombre: "Lámpara de Pie", image:"./img/lampara.jpeg", precio: 35000, desc: "Lámpara de pie moderna", stock: 10, categoria: "hogar"},
    {id: 24, nombre: "Estantería", image:"./img/estnteria.webp", precio: 45000, desc: "Estantería de madera", stock: 7, categoria: "hogar"},
    {id: 25, nombre: "Cojines Decorativos", image:"./img/cojines.jpeg", precio: 10000, desc: "Cojines coloridos para el salón", stock: 50, categoria: "hogar"},
    {id: 26, nombre: "Cortinas", image:"./img/cortinas.jpg", precio: 25000, desc: "Cortinas de tela resistente", stock: 15, categoria: "hogar"},
    {id: 27, nombre: "Alfombra", image:"./img/alfombra.webp", precio: 70000, desc: "Alfombra suave y acogedora", stock: 6, categoria: "hogar"},
    {id: 28, nombre: "Espejo de Pared", image:"./img/espejo.jpg", precio: 40000, desc: "Espejo grande para la sala", stock: 12, categoria: "hogar"},
    {id: 29, nombre: "Repisas Flotantes", image:"./img/repisas.jpg", precio: 20000, desc: "Repisas minimalistas para decoración", stock: 20, categoria: "hogar"},
    {id: 30, nombre: "Jarrón de Cerámica", image:"./img/jarron.webp", precio: 15000, desc: "Jarrón elegante para flores", stock: 30, categoria: "hogar"},

    // Ropa
    {id: 31, nombre: "Camisa Casual", image:"./img/camisa.webp", precio: 30000, desc: "Camisa de algodón para uso diario", stock: 25, categoria: "ropa"},
    {id: 32, nombre: "Pantalones de Mezclilla", image:"./img/pantalon_mezclilla.webp", precio: 50000, desc: "Pantalones resistentes y cómodos", stock: 18, categoria: "ropa"},
    {id: 33, nombre: "Chaqueta de Invierno", image:"./img/chaqueta_.jpg", precio: 120000, desc: "Chaqueta acolchada para el frío", stock: 10, categoria: "ropa"},
    {id: 34, nombre: "Vestido de Verano", image:"./img/vestido_verano.jpg", precio: 45000, desc: "Vestido fresco y colorido", stock: 20, categoria: "ropa"},
    {id: 35, nombre: "Sudadera con Capucha", image:"./img/sudadera.jpg", precio: 55000, desc: "Sudadera cómoda y abrigada", stock: 15, categoria: "ropa"},
    {id: 36, nombre: "Camiseta Gráfica", image:"./img/camiseta.webp", precio: 20000, desc: "Camiseta con diseño moderno", stock: 40, categoria: "ropa"},
    {id: 37, nombre: "Pijama de Algodón", image:"./img/pijama.webp", precio: 35000, desc: "Pijama suave y cómoda", stock: 30, categoria: "ropa"},
    {id: 38, nombre: "Abrigo de Lana", image:"./img/abrigo_lana.webp", precio: 180000, desc: "Abrigo elegante para invierno", stock: 5, categoria: "ropa"},
    {id: 39, nombre: "Shorts Deportivos", image:"./img/shorts.jpg", precio: 25000, desc: "Shorts ligeros para hacer ejercicio", stock: 20, categoria: "ropa"},
];


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 0);
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items.find(e => e.id == id))
        })
    }, 3000)
}
let libros = [
    {
    titulo:"Anna y el beso frances",
    autor:"stephanie Perkins",
    genero: "juvenil-romantico",
    idioma: "ingles",
    precio: "111.628",
    formato:"tapa blanda",
    isbn:"9781409579939",
    descripcion:"Esta historia sigue a Anna, una chica americana que no sabe casi anda de París. Por eso, cuando sus padres le anuncian que pasará un año en un internado de París, la idea no acaba de convencerla. Pero, en la Ciudad del Amor, conoce al chico ideal: Étienne St. Clair. Es listo, encantador y muy guapo. El único problema es que también tiene novia. ¿Conseguirá Anna el ansiado beso de su príncipe azul? El humor y la tensión que se respiran página a página en el debut literario de Stephanie Perkins te atraparán y te llegarán al corazón.",
    estado: "nuevo", 
    ubicacion: "casa del libro",
    fecha_publicacion: "2012",
    editorial:"Usborne",
    paginas:"416 paginas",
    dimensiones:"14.7 x 2.7 x 20.4 cm",
    peso:"1,05 kg"
    },
    {
    titulo: "Cien años de soledad",
    Autor: "Gabriel García Márquez",
    Género: "Realismo mágico",
    Idioma: "Español",
    Precio: "$20.00",
    Formato: "Tapa dura",
    ISBN: "978-84-376-0494-7",
    Descripción: "La historia de la familia Buendía en el pueblo ficticio de Macondo.",
    Estado: "Nuevo",
    Ubicación: "Biblioteca Principal",
    Fecha_Publicación: "1967",
    Editorial: "Editorial Sudamericana",
    Páginas: "432",
    Dimensiones: "15 x 23 cm",
    Peso: "600 g"
    },
    {
    titulo:"El amor en los tiempos del cólera",
    Autor: "Gabriel García Márquez",
    Género: "Romance",
    Idioma: "Español",
    Precio: "$15.00",
    Formato: "Bolsillo",
    ISBN: "978-84-376-0495-4",
    Descripción: "Una historia de amor que perdura a lo largo de décadas.",
    Estado: "Usado (buen estado)",
    Ubicación: "Estantería 2",
    Fecha_Publicación: "1985",
    Editorial: "Penguin Random House",
    Páginas: "368",
    Dimensiones: "12 x 18 cm",
    Peso: "400 g"
    },
    {
    Título: "El nombre del viento",
    Autor: "Patrick Rothfuss",
    Género: "Fantasía épica",
    Idioma: "Español",
    Precio: "$23.00",
    Formato: "Pasta dura",
    ISBN: "978-84-450-7701-3",
    Descripción: "La historia de Kvothe, un joven músico y mago, contada en retrospectiva.",
    Estado: "Nuevo",
    Ubicación: "Fantasía y Ciencia Ficción",
    Fecha_Publicación: "2007",
    Editorial: "Plaza & Janés",
    Páginas: "864",
    Dimensiones: "16 x 24 cm",
    Peso: "900 g"

    },
    {
    Título: "La chica del tren",
    Autor: "Paula Hawkins",
    Género: "Thriller psicológico",
    Idioma: "Español",
    Precio:" $16.00",
    Formato: "Tapa blanda",
    ISBN: "978-84-397-3037-7",
    Descripción: "Una mujer obsesionada con una pareja que ve desde el tren se ve envuelta en un misterio.",
    Estado: "Nuevo",
    Ubicación: "Mejores Ventas",
    Fecha_Publicación:" 2015",
    Editorial: "Planeta",
    Páginas: "496",
    Dimensiones: "14 x 21 cm",
    Peso: "600 g",
    },
    {
    Título: "Ready Player One",
    Autor: "Ernest Cline",
    Género: "Ciencia ficción",
    Idioma: "Español",
    Precio: "$19.00",
    Formato: "Tapa blanda",
    ISBN: "978-84-450-7628-3",
    Descripción: "En un futuro distópico, un joven se sumerge en un mundo virtual para encontrar un tesoro oculto.",
    Estado: "Nuevo",
    Ubicación: "Ciencia Ficción",
    Fecha_Publicación: "2011",
    Editorial: "Ediciones B",
    Páginas: "464",
    Dimensiones: "15 x 22 cm",
    Peso: "600 g ",
    },
    {
    Título: "Los juegos del hambre",
    Autor: "Suzanne Collins",
    Género: "Distopía",
    Idioma: "Español",
    Precio: "$18.00",
    Formato: "Tapa blanda",
    ISBN: "978-84-9867-853-7",
    Descripción: "En un futuro distópico, jóvenes son obligados a participar en un juego mortal televisado.",
    Estado: "Nuevo",
    Ubicación: "Distopías y Ciencia Ficción",
    Fecha_Publicación: "2008",
    Editorial: "Molino",
    Páginas: "416",
    Dimensiones: "13 x 20 cm",
    Peso: "500 g" 
    },
    {
    Título: "Los hombres que no amaban a las mujeres",
    Autor: "Stieg Larsson",
    Género: "Thriller",
    Idioma: "Español",
    Precio: "$20.00",
    Formato: "Tapa dura",
    ISBN: "978-84-397-2678-3",
    Descripción: "La primera entrega de la trilogía Millenium, una intriga de misterio y corrupción.",
    Estado:" Nuevo",
    Ubicación: "Novelas Policiacas",
    Fecha_Publicación: "2005",
    Editorial:" Destino",
    Páginas: "672",
    Dimensiones: "16 x 24 cm",
    Peso: "900 g "  
    },
    {
    Título: "El viejo y el mar",
    Autor: "Ernest Hemingway",
    Género: "Novela corta",
    Idioma: "Español",
    Precio: "$9.00",
    Formato: "Tapa blanda",
    ISBN: "978-84-322-0857-6",
    Descripción: "La historia de un pescador cubano y su batalla épica con un pez gigante en alta mar.",
    Estado: "Usado (buen estado)",
    Ubicación: "Sección de Clásicos",
    Fecha_Publicación: "1952",
    Editorial: "Debolsillo",
    Páginas: "128",
    Dimensiones: "12 x 18 cm",
    Peso: "200 g"
    },
    {
    Título: "La carretera",
    Autor: "Cormac McCarthy",
    Género: "Novela postapocalíptica",
    Idioma: "Español",
    Precio: "$16.00",
    Formato: "Pasta blanda",
    ISBN: "978-84-397-2492-5",
    Descripción: "Un padre y su hijo viajan por un paisaje desolado en busca de un lugar seguro.",
    Estado: "Usado (buen estado)",
    Ubicación: "Sección de Aventuras",
    Fecha_Publicación: "2006",
    Editorial: "Mondadori",
    Páginas: "256",
    Dimensiones: "13 x 20 cm",
    Peso: "400 g"
    },
    {
    Título: "La hoguera de las vanidades",
    Autor: "Tom Wolfe",
    Género: "Novela satírica",
    Idioma: "Español",
    Precio:" $18.00",
    Formato: "Tapa blanda",
    ISBN: "978-84-339-1452-4",
    Descripción: "La historia de un hombre adinerado cuya vida se desmorona tras un accidente de tráfico.",
    Estado:" Nuevo",
    Ubicación: "Ficción Contemporánea",
    Fecha_Publicación:" 1987",
    Editorial: "Anagrama",
    Páginas: "800",
    Dimensiones: "15 x 23 cm",
    Peso:" 900 g"
    },
    {
        
    }

];






let nuevoLibro={
    titulo:"Anna y el beso frances",
    autor:"stephanie Perkins",
    genero: "juvenil-romantico",
    idioma: "ingles",
    precio: "111.628",
    formato:"tapa blanda",
    isbn:"9781409579939",
    descripcion:"Esta historia sigue a Anna, una chica americana que no sabe casi anda de París. Por eso, cuando sus padres le anuncian que pasará un año en un internado de París, la idea no acaba de convencerla. Pero, en la Ciudad del Amor, conoce al chico ideal: Étienne St. Clair. Es listo, encantador y muy guapo. El único problema es que también tiene novia. ¿Conseguirá Anna el ansiado beso de su príncipe azul? El humor y la tensión que se respiran página a página en el debut literario de Stephanie Perkins te atraparán y te llegarán al corazón.",
    estado: "nuevo", 
    ubicacion: "casa del libro",
    fecha_publicacion: "6 de noviembre del 2018",
    editorial:"Usborne",
    paginas:"416 paginas",
    dimensiones:"14.7 x 2.7 x 20.4 cm",
    peso:"1,05 kg"
}

libros.push(nuevoLibro)
console.log(libros)
libros.splice(1,1)
console.log(libros);


// libros.forEach((libro,index) =>{
//     console.log(${index +1} titulo : ${libro.titulo});
// })
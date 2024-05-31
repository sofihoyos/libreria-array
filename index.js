let libros = [
    {
    Título:"Anna y el beso frances",
    Autor:"stephanie Perkins",
    Género: "juvenil-romantico",
    Idioma: "ingles",
    Precio: 25.00,
    Formato:"tapa blanda",
    ISBN:"9781409579939",
    Descripción:"Esta historia sigue a Anna, una chica americana que no sabe casi anda de París. Por eso, cuando sus padres le anuncian que pasará un año en un internado de París, la idea no acaba de convencerla. Pero, en la Ciudad del Amor, conoce al chico ideal: Étienne St. Clair. Es listo, encantador y muy guapo. El único problema es que también tiene novia. ¿Conseguirá Anna el ansiado beso de su príncipe azul? El humor y la tensión que se respiran página a página en el debut literario de Stephanie Perkins te atraparán y te llegarán al corazón.",
    Estado: "nuevo", 
    Ubicación: "casa del libro",
    Fecha_Publicación: "2012",
    Editorial:"Usborne",
    Páginas:416,
    Dimensiones:"14.7 x 2.7 x 20.4 cm",
    Peso:"1,05 kg"
    },
    {
    Título: "Cien años de soledad",
    Autor: "Gabriel García Márquez",
    Género: "Realismo mágico",
    Idioma: "Español",
    Precio: 20.00,
    Formato: "Tapa dura",
    ISBN: "978-84-376-0494-7",
    Descripción: "La historia de la familia Buendía en el pueblo ficticio de Macondo.",
    Estado: "Nuevo",
    Ubicación: "Biblioteca Principal",
    Fecha_Publicación: "1967",
    Editorial:"Usborne",
    Páginas: 432,
    Dimensiones: "15 x 23 cm",
    Peso: "600 g"
    },
    {
    Título:"El amor en los tiempos del cólera",
    Autor: "Gabriel García Márquez",
    Género: "Romance",
    Idioma: "Español",
    Precio: 15.00,
    Formato: "Bolsillo",
    ISBN: "978-84-376-0495-4",
    Descripción: "Una historia de amor que perdura a lo largo de décadas.",
    Estado: "Usado (buen estado)",
    Ubicación: "Estantería 2",
    Fecha_Publicación: "1985",
    Editorial:"Usborne",
    Páginas: 368,
    Dimensiones: "12 x 18 cm",
    Peso: "400 g"
    },
    {
    Título: "El nombre del viento",
    Autor: "Patrick Rothfuss",
    Género: "Fantasía épica",
    Idioma: "Español",
    Precio: 23.00,
    Formato: "Pasta dura",
    ISBN: "978-84-450-7701-3",
    Descripción: "La historia de Kvothe, un joven músico y mago, contada en retrospectiva.",
    Estado: "Nuevo",
    Ubicación: "Fantasía y Ciencia Ficción",
    Fecha_Publicación: "2007",
    Editorial:"Usborne",
    Páginas: 864,
    Dimensiones: "16 x 24 cm",
    Peso: "900 g"

    },
    {
    Título: "La chica del tren",
    Autor: "Paula Hawkins",
    Género: "Thriller psicológico",
    Idioma: "Español",
    Precio: 16.00,
    Formato: "Tapa blanda",
    ISBN: "978-84-397-3037-7",
    Descripción: "Una mujer obsesionada con una pareja que ve desde el tren se ve envuelta en un misterio.",
    Estado: "Nuevo",
    Ubicación: "Mejores Ventas",
    Fecha_Publicación:"2015",
    Editorial:"Usborne",
    Páginas: 496,
    Dimensiones: "14 x 21 cm",
    Peso: "600 g"
    },
    {
    Título: "Ready Player One",
    Autor: "Ernest Cline",
    Género: "Ciencia ficción",
    Idioma: "Español",
    Precio: 19.00,
    Formato: "Tapa blanda",
    ISBN: "978-84-450-7628-3",
    Descripción: "En un futuro distópico, un joven se sumerge en un mundo virtual para encontrar un tesoro oculto.",
    Estado: "Nuevo",
    Ubicación: "Ciencia Ficción",
    Fecha_Publicación: "2011",
    Editorial: "Ediciones B",
    Páginas: 464,
    Dimensiones: "15 x 22 cm",
    Peso: "600 g "
    },
    {
    Título: "Los juegos del hambre",
    Autor: "Suzanne Collins",
    Género: "Distopía",
    Idioma: "Español",
    Precio: 18.00,
    Formato: "Tapa blanda",
    ISBN: "978-84-9867-853-7",
    Descripción: "En un futuro distópico, jóvenes son obligados a participar en un juego mortal televisado.",
    Estado: "Nuevo",
    Ubicación: "Distopías y Ciencia Ficción",
    Fecha_Publicación: "2008",
    Editorial: "Ediciones B",
    Páginas: 416,
    Dimensiones: "13 x 20 cm",
    Peso: "500 g" 
    },
    {
    Título: "Los hombres que no amaban a las mujeres",
    Autor: "Stieg Larsson",
    Género: "Thriller",
    Idioma: "Español",
    Precio: 20.00,
    Formato: "Tapa dura",
    ISBN: "978-84-397-2678-3",
    Descripción: "La primera entrega de la trilogía Millenium, una intriga de misterio y corrupción.",
    Estado:"Nuevo",
    Ubicación: "Novelas Policiacas",
    Fecha_Publicación: "2005",
    Editorial: "Ediciones B",
    Páginas: 672,
    Dimensiones: "16 x 24 cm",
    Peso: "900 g "  
    },
    {
    Título: "El viejo y el mar",
    Autor: "Ernest Hemingway",
    Género: "Novela corta",
    Idioma: "Español",
    Precio: 9.00,
    Formato: "Tapa blanda",
    ISBN: "978-84-322-0857-6",
    Descripción: "La historia de un pescador cubano y su batalla épica con un pez gigante en alta mar.",
    Estado: "Usado (buen estado)",
    Ubicación: "Sección de Clásicos",
    Fecha_Publicación: "1952",
    Editorial: "Ediciones B",
    Páginas: 128,
    Dimensiones: "12 x 18 cm",
    Peso: "200 g"
    },
    {
    Título: "La carretera",
    Autor: "Cormac McCarthy",
    Género: "Novela postapocalíptica",
    Idioma: "Español",
    Precio: 16.00,
    Formato: "Pasta blanda",
    ISBN: "978-84-397-2492-5",
    Descripción: "Un padre y su hijo viajan por un paisaje desolado en busca de un lugar seguro.",
    Estado: "Usado (buen estado)",
    Ubicación: "Sección de Aventuras",
    Fecha_Publicación: "2006",
    Editorial: "Ediciones B",
    Páginas: 256,
    Dimensiones: "13 x 20 cm",
    Peso: "400 g"
    },
    {
    Título: "La hoguera de las vanidades",
    Autor: "Tom Wolfe",
    Género: "Novela satírica",
    Idioma: "Español",
    Precio: 18.00,
    Formato: "Tapa blanda",
    ISBN: "978-84-339-1452-4",
    Descripción: "La historia de un hombre adinerado cuya vida se desmorona tras un accidente de tráfico.",
    Estado:"Nuevo",
    Ubicación: "Ficción Contemporánea",
    Fecha_Publicación:"1987",
    Editorial: "Anagrama",
    Páginas: 800,
    Dimensiones: "15 x 23 cm",
    Peso:"900 g"
    },
    {
    Título: "La ciudad y los perros",
    Autor: "Mario Vargas Llosa",
    Género: "Novela",
    Idioma: "Español",
    Precio: 17.00,
    Formato: "Pasta blanda",
    ISBN: "978-84-397-0287-8",
    Descripción: "La historia de un grupo de estudiantes en un colegio militar en Lima y su lucha por la supervivencia.",
    Estado: "Nuevo",
    Ubicación: "Sección de Novelas Latinoamericanas",
    Fecha_Publicación: "1963",
    Editorial: "Anagrama",
    Páginas: 496,
    Dimensiones: "14 x 21 cm",
    Peso: "600 g"
    },
    {
    Título: "Divergente",
    Autor: "Veronica Roth",
    Género: "Distopía, Ciencia ficción",
    Idioma: "Español",
    Precio: 15.00,
    Formato: "Tapa blanda",
    ISBN: "978-84-272-0213-5",
    Descripción:" En un mundo dividido en facciones basadas en virtudes humanas,Tris Prior descubre un peligroso secreto y debe decidir en quién confiar.",
    Estado: "Nuevo",
    Ubicación: "Distopías y Ciencia Ficción",
    Fecha_Publicación: "2011",
    Editorial: "Anagrama",
    Páginas: 464,
    Dimensiones: "15 x 22 cm",
    Peso: "500 g"
    },
    {
    Título: "Insurgente",
    Autor: "Veronica Roth",
    Género: "Distopía, Ciencia ficción",
    Idioma: "Español",
    Precio: 16.00,
    Formato: "Tapa blanda",
    ISBN: "978-84-272-0214-2",
    Descripción: "Tris Prior debe enfrentarse a las consecuencias de sus decisiones mientras una guerra se desata entre las facciones.",
    Estado: "Nuevo",
    Ubicación: "Distopías y Ciencia Ficción",
    Fecha_Publicación: "2012",
    Editorial: "Anagrama",
    Páginas: 464,
    Dimensiones: "15 x 22 cm",
    Peso: "500 g"
    },
    {
    Título: "Leal",
    Autor: "Veronica Roth",
    Género: "Distopía, Ciencia ficción",
    Idioma: "Español",
    Precio: 17.00,
    Formato: "Tapa blanda",
    ISBN:" 978-84-272-0215-9",
    Descripción: "Tris y Cuatro descubren verdades sorprendentes sobre su mundo y deben decidir cómo actuar frente a la revelación de una nueva realidad.",
    Estado: "Nuevo",
    Ubicación: "Distopías y Ciencia Ficción",
    Fecha_Publicación: "2013",
    Editorial: "Anagrama",
    Páginas: 496,
    Dimensiones: "15 x 22 cm",
    Peso: "500 g"
    },
    {
    Título: "Cazadores de sombras: Ciudad de hueso",
    Autor: "Cassandra Clare",
    Género: "Fantasía urbana",
    Idioma: "Español",
    Precio: 20.00,
    Formato: "Tapa blanda",
    ISBN: "978-84-253-4194-8",
    Descripción: "Clary Fray descubre un mundo oculto lleno de demonios y cazadores de sombras.",
    Estado: "Nuevo",
    Ubicación: "Fantasía y Aventura",
    Fecha_Publicación: "2007",
    Editorial: "Destino",
    Páginas: 512,
    Dimensiones: "14 x 21 cm",
    Peso: "700 g"
    },
    {
    Título: "Cazadores de sombras: Ciudad de ceniza",
    Autor: "Cassandra Clare",
    Género: "Fantasía urbana",
    Idioma: "Español",
    Precio: 20.00,
    Formato: "Tapa blanda",
    ISBN: "978-84-253-4195-5",
    Descripción: "Clary continúa su lucha contra los demonios mientras descubre más sobre su pasado.",
    Estado: "Nuevo",
    Ubicación: "Fantasía y Aventura",
    Fecha_Publicación:"2008",
    Editorial: "Destino",
    Páginas: 464,
    Dimensiones: "14 x 21 cm",
    Peso: "650 g"
    },
    {
    Título: "Cazadores de sombras: Ciudad de cristal",
    Autor: "Cassandra Clare",
    Género: "Fantasía urbana",
    Idioma: "Español",
    Precio: 22.00,
    Formato: "Tapa blanda",
    ISBN: "978-84-253-4196-2",
    Descripción: "Clary debe viajar a la ciudad ancestral de los cazadores de sombras para salvar a su madre.",
    Estado:"Nuevo",
    Ubicación: "Fantasía y Aventura",
    Fecha_Publicación: "2009",
    Editorial: "Destino",
    Páginas: 544,
    Dimensiones: "14 x 21 cm",
    Peso: "700 g"
    },
    {
    Título: "Cazadores de sombras: Ciudad de los ángeles caídos",
    Autor: "Cassandra Clare",
    Género: "Fantasía urbana",
    Idioma: "Español",
    Precio: 21.00,
    Formato: "Tapa blanda",
    ISBN:" 978-84-253-4197-9",
    Descripción: "La paz parece estar a la vista, pero nuevas amenazas surgen y Clary debe enfrentarlas.",
    Estado: "Nuevo",
    Ubicación: "Fantasía y Aventura",
    Fecha_Publicación: "2011",
    Editorial: "Destino",
    Páginas: 432,
    Dimensiones: "14 x 21 cm",
    Peso: "600 g"
    },
    {
    Título: "Cazadores de sombras: Ciudad de las almas perdidas",
    Autor: "Cassandra Clare",
    Género: "Fantasía urbana",
    Idioma: "Español",
    Precio: 21.00,
    Formato: "Tapa blanda",
    ISBN: "978-84-253-4198-6",
    Descripción: "Clary y sus amigos deben salvar a Jace de una influencia maligna que lo controla.",
    Estado: "Nuevo",
    Ubicación: "Fantasía y Aventura",
    Fecha_Publicación: "2012",
    Editorial: "Destino",
    Páginas: 544,
    Dimensiones: "14 x 21 cm",
    Peso: "700 g " 
    }
];
let continuar="si",menu;
while (continuar === "si") {
menu="MENU\n"
menu+="1- Mostrar la pila de libros\n"
menu+="2- Agregar un nuevo libro a la pila\n"
menu+="3- Borrar un libro de la pila de libros\n"
menu+="4- Listar libros\n"
menu+="5- Resumenes de este segmento\n"
menu+="6- Funcionalidades de este segmento\n\n"
menu+="Ingrese el numero de lo que desea hacer"
let decision=parseInt(prompt(menu));
switch (decision) {
    case 1:
        libros.forEach((libro,index)=>{
            console.log("libro " + (index+1) +" Titulo: "+  (libro.Título) +   " Autor: " +   (libro.Autor) 
            + " Genero: " + (libro.Género) + " Idioma: " + (libro.Idioma) + " Precio: " + (libro.Precio) 
            + " Formato: " + (libro.Formato) + " ISBN: " + (libro.ISBN) + " Descripcion: " + (libro.Descripción) 
            + " Estado: " + (libro.Estado) + " Ubicacion:" + (libro.Ubicación) + " Fecha de publicacion: " + (libro.Fecha_Publicación)
            + " Editorial: " + (libro.Editorial) + "Paginas: " + (libro.Páginas) + " Dimensiones: "  + (libro.Dimensiones + " Peso: "  + (libro.Peso))) ;
        })
    break;
    case 2:
        let nuevoLibro = {
            Título: prompt("ingresa el titulo del libro"),
            Autor: prompt("ingresa el autor del libro"),
            Género: prompt("ingresa el genero del libro"),
            Idioma: prompt("ingresa el idioma del libro"),
            Precio:prompt("ingresa el precio del libro"),
            Formato: prompt("ingresa el formato del libro"),
            ISBN: prompt("ingresa el isbn del libro"),
            Descripción: prompt("ingresa la descripcion del libro"),
            Estado: prompt("ingresa el estado del libro"),
            Ubicación: prompt("ingresa la ubicaion del libro"),
            Fecha_Publicación: prompt("ingresa la fecha de publicacion del libro "),
            Editorial: prompt("ingresa la editorial del libro"),
            Páginas:prompt("ingresa las paginas del libro"),
            Dimensiones: prompt("ingresa las dimensiones del libro"),
            Peso: prompt("ingresa el peso del libro")
        }
        libros.push(nuevoLibro)
        console.log("agregado con exito");
        libros.forEach((libro,index)=>{
        console.log("libro " + (index+1) +" Titulo: "+  (libro.Título) +   " Autor: " +   (libro.Autor) 
            + " Genero: " + (libro.Género) + " Idioma: " + (libro.Idioma) + " Precio: " + (libro.Precio) 
            + " Formato: " + (libro.Formato) + " ISBN: " + (libro.ISBN) + " Descripcion: " + (libro.Descripción) 
            + " Estado: " + (libro.Estado) + " Ubicacion:" + (libro.Ubicación) + " Fecha de publicacion: " + (libro.Fecha_Publicación)
            + " Editorial: " + (libro.Editorial) + "Paginas: " + (libro.Páginas) + " Dimensiones: "  + (libro.Dimensiones + " Peso: "  + (libro.Peso))) ;
        })
    break;
    case 3:
        libros.pop()
        console.log("borrado con exito");
        libros.forEach((libro,index)=>{
            console.log("libro " + (index+1) +" Titulo: "+  (libro.Título) +   " Autor: " +   (libro.Autor) 
            + " Genero: " + (libro.Género) + " Idioma: " + (libro.Idioma) + " Precio: " + (libro.Precio) 
            + " Formato: " + (libro.Formato) + " ISBN: " + (libro.ISBN) + " Descripcion: " + (libro.Descripción) 
            + " Estado: " + (libro.Estado) + " Ubicacion:" + (libro.Ubicación) + " Fecha de publicacion: " + (libro.Fecha_Publicación)
            + " Editorial: " + (libro.Editorial) + "Paginas: " + (libro.Páginas) + " Dimensiones: "  + (libro.Dimensiones + " Peso: "  + (libro.Peso))) ;
        })
    break;
    case 4:
        menu="MENU\n"
        menu+="1- Manejo de Array Methods\n"
        menu+="2-Manejo de Array Methods + spreed operator.\n\n"
        menu+="Ingrese el numero de lo que desea hacer"
        let decision2=parseInt(prompt(menu));
        switch (decision2) {
        case 1:
        // MANEJO DE ARRAY METHODS
        let titulo = libros.map((libro)=>{
            return{
                Título: libro.Título,
                Autor: libro.Autor,
                Editorial: libro.Editorial,
                Precio: libro.Precio
            }})
            console.table(titulo)
  
        titulo = libros.map((libro)=>{
            return{
                Título: libro.Título,
                Idioma: libro.Idioma
            }})
            console.table(titulo)
        titulo = libros.map((libro)=>{
            return{
                Título: libro.Título,
                Estado: libro.Estado
            }})
            console.table(titulo)
        titulo = libros.map((libro)=>{
            return{
                Título: libro.Título,
                ISBN: libro.ISBN
            }})
            console.table(titulo)
        titulo = libros.map((libro)=>{
            return{
                Título: libro.Título,
                Páginas: libro.Páginas
            }})
            console.table(titulo)
        titulo = libros.map((libro)=>{
            return{
                Título: libro.Título,
                Dimensiones: libro.Dimensiones
            }})
            console.table(titulo)
        titulo = libros.map((libro)=>{
            return{
                Título: libro.Título,
                Fecha_Publicación: libro.Fecha_Publicación
            }})
            console.table(titulo)
        titulo = libros.map((libro)=>{
            return{
                Título: libro.Título,
                Precio: libro.Precio
            }})
            console.table(titulo)
        titulo = libros.map((libro)=>{
            return{
                Título: libro.Título,
                Peso: libro.Peso
            }})
            console.table(titulo)
        titulo = libros.map((libro)=>{
            return{
                Título: libro.Título,
                Ubicación: libro.Ubicación
            }})
            console.table(titulo)
        titulo = libros.map((libro)=>{
            return{
                Título: libro.Título,
                Género: libro.Género
            }})
            console.table(titulo)
                break;
        case 2: 
        // Manejo de Array Methods + spreed operator.
        let librosConDescuentos = libros.map((libros)=>{
            return{
                ...libros,
                descuento:20,
            }})
            console.table(librosConDescuentos)
        let librosResumenDescuento = librosConDescuentos.map((libro)=>{
            return{
                Titulo: libro.Título,
                Autor: libro.Autor,
                Editorial:libro.Editorial,
                Precio: libro.Precio,
                Descuento: libro.descuento
            }});
            console.table(librosResumenDescuento)
            break;
        }
    break;
    case 5:
        menu="MENU\n"
        menu+="1- Manejo de Array methods Filter()\n"
        menu+="2- Manejo de Array methods sort()\n"
        menu+="3- Manejo Array Methods encadenados.\n\n"
        menu+="Ingrese el numero de lo que desea hacer"
        let decision3=parseInt(prompt(menu));
        switch (decision3) {
        case 1:
        // Manejo de Array methods Filter()
        let librosCaros = libros.filter((libro)=>{
            return libro.Precio > 30;
        });
        console.table(librosCaros);
        let librosConMayorPaginas=libros.sort((a, b)=> b.Páginas - a.Páginas)
        .map((libro)=>{
            return{
                Titulo: libro.Título,
                Autor: libro.Autor,
                Editorial:libro.Editorial,
                Paginas: libro.Páginas
            }});
            console.table(librosConMayorPaginas);
                break;
        case 2:
        // Manejo de Array methods sort()
        let librosConMayorNumeroPaginas=libros.sort((a, b)=> b.Páginas - a.Páginas);
        console.table(librosConMayorNumeroPaginas)
        break;
        case 3:
        // Manejo Array Methods encadenados.
        // Mayores de 11 dolares
        let librosCarosPorTitulo=libros.filter((libro)=>{
            return libro.Precio > 11;
        })
        .map ((libro) => {
            return{
                Título: libro.Título,
                Autor: libro.Autor,
                Precio: libro.Precio
            }}) 
            .sort((a, b)=> b.Precio - a.Precio)
            console.table(librosCarosPorTitulo)
        // libros qeu tengan menos de 256
        let librosConMenorPaginas=libros.filter((libro)=>{
            return libro.Páginas > 256;
        })
        .map ((libro) => {
            return{
                Titulo: libro.Título,
                Autor: libro.Autor,
                Editorial:libro.Editorial,
                Paginas: libro.Páginas
            }}) 
            console.table(librosConMenorPaginas)
        // libros mayores a 20
        let librosCarosPrecio=libros.filter((libro)=>{
            return libro.Precio > 20;})
            .map ((libro) => {
                return{
                    Título: libro.Título,
                    Autor: libro.Autor,
                    Precio: libro.Precio
                }}) 
            .sort((a, b)=> b.Precio - a.Precio)
            console.table(librosCarosPrecio);
        // libros por numero mas alto de paginas
        let LibrosResumenAltoPaginas= libros.map ((libro) => {
            return{
                Titulo: libro.Título,
                Autor: libro.Autor,
                Editorial:libro.Editorial,
                Paginas: libro.Páginas
            }}) 
            .sort((a, b)=> b.Páginas - a.Páginas);
            console.table(LibrosResumenAltoPaginas)
    break;
            default:
                break;
        }
        break;
    case 6:
        menu="MENU\n"
        menu+="1- Un objeto del array por titulo\n"
        menu+="2- Un objeto del array por autor\n"
        menu+="3- Un objeto del array por fecha de publicacion\n"
        menu+="4- Un objeto del array por genero\n"
        menu+="5- Un objeto del array por idioma\n"
        menu+="6-10 iteracciones de busqueda\n\n"
        menu+="Ingrese el numero de lo que desea hacer"
        let decision4=parseInt(prompt(menu));
        switch (decision4) {
            case 1:
                let libroTitulo = libros.find((libro) => {
                    return libro.Título === "La chica del tren";
                });
                console.table(libroTitulo)
                break;
            case 2:
                let libroAutor = libros.find((libro) => {
                    return libro.Autor === "Tom Wolfe";
                });
                console.table(libroAutor)
                break;
            case 3:
                let libroFechaPublicacion = libros.find((libro) => {
                    return libro.Fecha_Publicación === "1963";
                });
                console.table(libroFechaPublicacion)
                break;
            case 4:
                let libroGenero = libros.find((libro) => {
                    return libro.Género === "Fantasía urbana";
                });
                console.table(libroGenero)
                break;
            case 5:
                let libroIdioma = libros.find((libro) => {
                    return libro.Idioma === "Español";
                });
                console.table(libroIdioma)
                break;
            case 6:
                let libroPrecio = libros.find((libro) => {
                    return libro.Precio === 20.00;
                });
                console.table(libroPrecio)
                //
                let libroFormato = libros.find((libro) => {
                    return libro.Formato === "Tapa blanda";
                });
                console.table(libroFormato)
                //
                let libroIsbn = libros.find((libro) => {
                    return libro.ISBN === "978-84-272-0213-5";
                });
                console.table(libroIsbn)
                //
                let libroEstado = libros.find((libro) => {
                    return libro.Estado === "Nuevo";
                });
                console.table(libroEstado)
                //
                let libroUbicacion = libros.find((libro) => {
                    return libro.Ubicación === "Sección de Novelas Latinoamericanas";
                });
                console.table(libroUbicacion)
                //
                let libroEditorial = libros.find((libro) => {
                    return libro.Editorial === "Anagrama";
                });
                console.table(libroEditorial)
                //
                let libroPaginas = libros.find((libro) => {
                    return libro.Páginas === 256;
                });
                console.table(libroPaginas)
                //
                let libroDimensiones = libros.find((libro) => {
                    return libro.Dimensiones ===  "14.7 x 2.7 x 20.4 cm" ;
                });
                console.table(libroDimensiones)
                //
                let libroGenero2 = libros.find((libro) => {
                    return libro.Género === "Romance";
                });
                console.table(libroGenero2)
                //
                let libroPeso = libros.find((libro) => {
                    return libro.Peso === "600 g";
                });
                console.table(libroPeso)
                break;
        }
        break;
    default:
        console.log("el numero ingresado no esta en el rango necesitado");
        break;
    }
continuar= prompt("Deseas continuar si/no")
}
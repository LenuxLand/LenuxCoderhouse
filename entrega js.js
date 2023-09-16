// Función para manejar el clic en el botón "PROXIMAMENTE" de las remeras
function handleMerchButtonClick(merchItem) {
  alert("La remera '" + merchItem.name + "' estará disponible próximamente. ¡Estén atentos!");
}

// Información de las remeras "PROXIMAMENTE"
const merchItems = [
  {
    name: "Remera Logo",
    description: "Remera con el logotipo de LENUXLAND. ¡Lúcela mientras juegas o transmites en vivo!",
    price: "$0"
  },
  {
    name: "Remera Diseño Especial",
    description: "Una remera con un diseño especial y exclusivo de LENUXLAND. Ideal para fans y seguidores.",
    price: "$0"
  },
  {
    name: "Remera Estampado",
    description: "Una remera con un estampado único que destaca tu estilo y pasión por los videojuegos.",
    price: "$0"
  }
];

// Selección de botones "PROXIMAMENTE" en las remeras
const merchButtons = document.querySelectorAll('.merch-item button');

// Asociación de controladores de eventos a los botones usando un bucle for
for (let i = 0; i < merchButtons.length; i++) {
  merchButtons[i].addEventListener('click', function() {
    handleMerchButtonClick(merchItems[i]);
  });
}

// Función para manejar el clic en el botón "PROXIMAMENTE" de la tienda en línea
function handleStoreButtonClick() {
  alert("Visita nuestra tienda en línea para más productos y variedad.");
}

// Selección del botón "PROXIMAMENTE" de la tienda en línea
const storeButton = document.querySelector('.text-center a.btn-primary');

// Asociación de un controlador de eventos al botón de la tienda en línea
storeButton.addEventListener('click', handleStoreButtonClick);

// Declarar un arreglo para almacenar información de productos de merchandising
const merchandisingItems = [
  {
    name: "Remera Logo",
    description: "Remera con el logotipo de LENUXLAND. ¡Lúcela mientras juegas o transmites en vivo!",
    price: "$20.99",
    available: false
  },
  {
    name: "Remera Diseño Especial",
    description: "Una remera con un diseño especial y exclusivo de LENUXLAND. Ideal para fans y seguidores.",
    price: "$24.99",
    available: true
  },
  {
    name: "Remera Estampado",
    description: "Una remera con un estampado único que destaca tu estilo y pasión por los videojuegos.",
    price: "$22.99",
    available: true
  }
];

// Función para mostrar la información de los productos de merchandising
function mostrarProductos() {
  for (let i = 0; i < merchandisingItems.length; i++) {
    const item = merchandisingItems[i];
    console.log("Nombre: " + item.name);
    console.log("Descripción: " + item.description);
    console.log("Precio: " + item.price);
    console.log("Disponible: " + (item.available ? "Sí" : "No"));
    console.log("----------");
  }
}

// Función para buscar productos disponibles
function buscarProductosDisponibles() {
  const disponibles = merchandisingItems.filter(function(item) {
    return item.available;
  });
  console.log("Productos disponibles:");
  console.log(disponibles);
}

// Función para calcular el precio promedio de los productos
function calcularPrecioPromedio() {
  let sumaPrecios = 0;
  for (let i = 0; i < merchandisingItems.length; i++) {
    sumaPrecios += parseFloat(merchandisingItems[i].price.replace("$", ""));
  }
  const precioPromedio = sumaPrecios / merchandisingItems.length;
  console.log("Precio promedio de los productos: $" + precioPromedio.toFixed(2));
}

// Mostrar productos en la consola
mostrarProductos();

// Buscar productos disponibles y mostrarlos
buscarProductosDisponibles();

// Calcular el precio promedio de los productos
calcularPrecioPromedio();

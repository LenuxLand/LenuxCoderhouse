// Clic en el botón "PROXIMAMENTE" de las remeras
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

// Productos de merchandising desde el almacenamiento local
let merchandisingItems = JSON.parse(localStorage.getItem('merchandisingItems')) || [];

// Botones "PROXIMAMENTE" en las remeras
const merchButtons = document.querySelectorAll('.merch-item button');

// Controladores de eventos a los botones usando un bucle for
for (let i = 0; i < merchButtons.length; i++) {
  merchButtons[i].addEventListener('click', function () {
    handleMerchButtonClick(merchItems[i]);
  });
}

// Clic en el botón "PROXIMAMENTE" de la tienda en línea
function handleStoreButtonClick() {
  alert("Visita nuestra tienda en línea para más productos y variedad.");
}


// Información de los productos de merchandising en el DOM
function displayMerchandisingItems() {
  const merchandisingContainer = document.getElementById('merchandising-container');

  merchandisingItems.forEach((item, index) => {
    const merchDiv = document.createElement('div');
    merchDiv.classList.add('merch-item');

    const itemName = document.createElement('h2');
    itemName.textContent = item.name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = 'Precio: ' + item.price;

    const itemAvailability = document.createElement('p');
    itemAvailability.textContent = 'Disponible: ' + (item.available ? 'Sí' : 'No');

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Marcar como Comprado/No Comprado';
    toggleButton.addEventListener('click', () => {
      toggleProductAvailability(index);
    });

    merchDiv.appendChild(itemName);
    merchDiv.appendChild(itemDescription);
    merchDiv.appendChild(itemPrice);
    merchDiv.appendChild(itemAvailability);
    merchDiv.appendChild(toggleButton);

    merchandisingContainer.appendChild(merchDiv);
  });
}

// Función para cambiar la disponibilidad de un producto
function toggleProductAvailability(index) {
  merchandisingItems[index].available = !merchandisingItems[index].available;
  localStorage.setItem('merchandisingItems', JSON.stringify(merchandisingItems));
  displayMerchandisingItems();
}

// Función para mostrar productos en el DOM
displayMerchandisingItems();

// Función para buscar productos disponibles y mostrarlos
function buscarProductosDisponibles() {
  const disponibles = merchandisingItems.filter(function (item) {
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

// Mostrar productos
displayMerchandisingItems();

// Buscar productos disponibles
buscarProductosDisponibles();

// Calcular el precio promedio
calcularPrecioPromedio();

function cargarDatosDesdeJSON() {
  return fetch('datos.json')
    .then(response => response.json())
    .then(data => {
      // Datos
      merchandisingItems = data;
      displayMerchandisingItems();
    })
    .catch(error => console.error('Error al cargar datos:', error));
}

// Datos desde un archivo JSON local
cargarDatosDesdeJSON();

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
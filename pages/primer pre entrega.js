// Función para manejar el clic en el botón "PROXIMAMENTE" de las remeras
function handleMerchButtonClick(merchItem) {
    alert("La remera '" + merchItem.name + "' estará disponible próximamente. ¡Estén atentos!");
  }
  
  // Obtener todos los botones "PROXIMAMENTE" en las remeras
  var merchItems = [
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
  
  var merchButtons = document.querySelectorAll('.merch-item button');
  
  // Agregar un controlador de eventos a cada botón
  merchButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      handleMerchButtonClick(merchItems[index]);
    });
  });
  
  // Función para manejar el clic en el botón "PROXIMAMENTE" de la tienda en línea
  function handleStoreButtonClick() {
    alert("Visita nuestra tienda en línea para más productos y variedad.");
  }
  
  // Obtener el botón "PROXIMAMENTE" de la tienda en línea
  var storeButton = document.querySelector('.text-center a.btn-primary');
  
  // Agregar un controlador de eventos al botón de la tienda en línea
  storeButton.addEventListener('click', handleStoreButtonClick);
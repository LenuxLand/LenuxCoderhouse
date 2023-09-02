// Función para actualizar el precio de una camiseta
function actualizarPrecio(camiseta, nuevoPrecio) {
    const precioElement = camiseta.querySelector(".price");
    precioElement.textContent = `$${nuevoPrecio}`;
  }
  
  // Función para habilitar o deshabilitar los botones de compra
  function habilitarBoton(camiseta, habilitado) {
    const boton = camiseta.querySelector("button");
    boton.disabled = !habilitado;
  }
  
  // Array de objetos que representa las camisetas
  const camisetas = [
    {
      nombre: "Remera Logo",
      descripcion: "Remera con el logotipo de LENUXLAND. ¡Lúcela mientras juegas o transmites en vivo!",
      precio: 20,
      disponible: true
    },
    {
      nombre: "Remera Diseño Especial",
      descripcion: "Una remera con un diseño especial y exclusivo de LENUXLAND. Ideal para fans y seguidores.",
      precio: 25,
      disponible: true
    },
    {
      nombre: "Remera Estampado",
      descripcion: "Una remera con un estampado único que destaca tu estilo y pasión por los videojuegos.",
      precio: 30,
      disponible: false
    }
  ];
  
  // Función para mostrar las camisetas en la página
  function mostrarCamisetas() {
    const merchandisingContainer = document.querySelector(".merchandising .row");
    camisetas.forEach((camiseta) => {
      const camisetaHTML = `
        <div class="col-md-4">
          <div class="merch-item">
            <h3 class="mt-3 mb-2">${camiseta.nombre}</h3>
            <p class="merch-description mb-2">${camiseta.descripcion}</p>
            <p class="price mb-2">$${camiseta.precio}</p>
            <button class="btn btn-primary" data-camiseta="${camiseta.nombre}">Comprar</button>
          </div>
        </div>
      `;
      merchandisingContainer.innerHTML += camisetaHTML;
    });
  }
  
  // Función para manejar la compra de una camiseta
  function comprarCamiseta(nombreCamiseta) {
    const camiseta = camisetas.find((c) => c.nombre === nombreCamiseta);
    if (camiseta && camiseta.disponible) {
      // Simular una compra con un precio aleatorio entre 10 y 50
      const nuevoPrecio = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      actualizarPrecio(camiseta, nuevoPrecio);
      habilitarBoton(camiseta, false); // Deshabilitar el botón después de la compra
    }
  }
  
  // Evento click en los botones de compra
  document.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "BUTTON") {
      const nombreCamiseta = event.target.getAttribute("data-camiseta");
      comprarCamiseta(nombreCamiseta);
    }
  });
  
  // Mostrar las camisetas al cargar la página
  window.addEventListener("load", () => {
    mostrarCamisetas();
  });
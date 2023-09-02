// Define una clase para representar camisetas
class Camiseta {
    constructor(nombre, descripcion, precio, disponible, categoria) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.disponible = disponible;
      this.categoria = categoria;
    }
  
    comprar() {
      if (this.disponible) {
        // Simula una compra con un precio aleatorio entre 10 y 50
        const nuevoPrecio = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
        this.precio = nuevoPrecio;
        this.disponible = false;
      }
    }
  }
  
  // Crea objetos Camiseta
  const camisetaLogo = new Camiseta("Remera Logo", "Remera con el logotipo de LENUXLAND. ¡Lúcela mientras juegas o transmites en vivo!", 20, true, "logotipo");
  const camisetaEspecial = new Camiseta("Remera Diseño Especial", "Una remera con un diseño especial y exclusivo de LENUXLAND. Ideal para fans y seguidores.", 25, true, "especial");
  const camisetaEstampado = new Camiseta("Remera Estampado", "Una remera con un estampado único que destaca tu estilo y pasión por los videojuegos.", 30, false, "estampado");
  
  // Función para mostrar las camisetas en la página
  function mostrarCamisetas(camisetas) {
    const merchContainer = document.querySelector(".merchandising .row");
  
    camisetas.forEach((camiseta) => {
      const camisetaHTML = `
        <div class="col-md-4">
          <div class="merch-item">
            <h3 class="mt-3 mb-2">${camiseta.nombre}</h3>
            <p class="merch-description mb-2">${camiseta.descripcion}</p>
            <p class="price mb-2">$${camiseta.precio}</p>
            <button class="btn btn-primary" data-camiseta="${camiseta.nombre}" ${
        camiseta.disponible ? "" : "disabled"
      }>Comprar</button>
          </div>
        </div>
      `;
  
      merchContainer.innerHTML += camisetaHTML;
    });
  }
  
  // Función para filtrar camisetas por categoría
  function filtrarCamisetasPorCategoria(categoria) {
    const camisetas = [camisetaLogo, camisetaEspecial, camisetaEstampado];
  
    // Filtrar camisetas por la categoría especificada
    const camisetasFiltradas = categoria === "todos" ? camisetas : camisetas.filter((camiseta) => camiseta.categoria === categoria);
  
    // Limpiar el contenedor de camisetas
    const merchContainer = document.querySelector(".merchandising .row");
    merchContainer.innerHTML = "";
  
    // Mostrar las camisetas filtradas
    mostrarCamisetas(camisetasFiltradas);
  }
  
  // Mostrar todas las camisetas al cargar la página
  window.addEventListener("load", () => {
    const camisetas = [camisetaLogo, camisetaEspecial, camisetaEstampado];
    mostrarCamisetas(camisetas);
  });
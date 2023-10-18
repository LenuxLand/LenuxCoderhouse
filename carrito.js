// Variables para mantener el estado del carrito
const carrito = [];
let total = 0;

// Función para agregar un artículo al carrito
function addToCart(name, price) {
  carrito.push({ name, price });
  total += parseFloat(price);
  updateCart();
}

// Función para eliminar un artículo del carrito
function removeFromCart(index) {
  const item = carrito.splice(index, 1)[0];
  total -= parseFloat(item.price);
  updateCart();
}

// Función para actualizar el contenido del carrito en el DOM
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  carrito.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name}: $${item.price}`;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.addEventListener('click', () => {
      removeFromCart(index);
    });

    listItem.appendChild(removeButton);
    cartItems.appendChild(listItem);
  });

  cartTotal.textContent = total.toFixed(2);
}

// Función para realizar el pedido
function checkout() {
  alert(`Pedido realizado por un total de $${total.toFixed(2)}`);
  carrito.length = 0;
  total = 0;
  updateCart();
}

// Evento para el botón "Realizar Pedido"
const checkoutButton = document.getElementById('checkout-btn');
checkoutButton.addEventListener('click', checkout);

// Eventos para los botones "Agregar al Carrito"
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    addToCart(name, price);
  });
});

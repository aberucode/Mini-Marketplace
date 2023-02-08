const CART_PRODUCTOS = "cartProductsId";

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  loadProductCart();
});

function getProductsDb() {
  const url = "../dbProducts.json";

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
    });
}

// Los productos publicados pertenecen a Vivanda (tienda online peruana)
// www.vivanda.com.pe
// los precios son reales
async function loadProducts() {
  const products = await getProductsDb();

  let html = "";
  products.forEach(product => {
    html += `
        <div class="col-3 product-container">
            <div class="card product">
                <img
                    src="${product.image}"
                    class="card-img-top"
                    alt="${product.name}"
                />
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.extraInfo}</p>
                    <p class="card-text">${product.price} Soles / Precio online</p>
                    <button type="button" class="btn btn-primary btn-cart" onClick=(addProductCart(${product.id}))>Añadir al carrito</button>
                </div>
            </div>
        </div>
      `;
  });

  document.getElementsByClassName("products")[0].innerHTML = html;
}

function openCloseCart() {
  const containerCart = document.getElementsByClassName("cart-products")[0];

  containerCart.classList.forEach(item => {
    if (item === "hidden") {
      containerCart.classList.remove("hidden");
      containerCart.classList.add("active");
    }

    if (item === "active") {
      containerCart.classList.remove("active");
      containerCart.classList.add("hidden");
    }
  });
}

function addProductCart(idProduct) {
  let arrayProductsId = [];

  let localStorageItems = localStorage.getItem(CART_PRODUCTOS);

  if (localStorageItems === null) {
    arrayProductsId.push(idProduct);
    localStorage.setItem(CART_PRODUCTOS, arrayProductsId);
  } else {
    let productsId = localStorage.getItem(CART_PRODUCTOS);
    if (productsId.length > 0) {
      productsId += "," + idProduct;
    } else {
      productsId = productId;
    }
    localStorage.setItem(CART_PRODUCTOS, productsId);
  }

  loadProductCart();
}

async function loadProductCart() {
  const products = await getProductsDb();

  // Convertimos el resultado del localStorage en un array
  const localStorageItems = localStorage.getItem(CART_PRODUCTOS);

  let html = "";
  if (!localStorageItems) {
    html = `
        <div class="cart-product empty">
            <p>Carrito vacio.</p>
        </div>
      `;
  } else {
    const idProductsSplit = localStorageItems.split(",");

    // los IDs duplicados se eliminan
    const idProductsCart = Array.from(new Set(idProductsSplit));

    idProductsCart.forEach(id => {
      products.forEach(product => {
        if (id == product.id) {
          const quantity = countDuplicatesId(id, idProductsSplit);
          const totalPrice = product.price * quantity;

          html += `
            <div class="cart-product">
                <img src="${product.image}" alt="${product.name}" />
                <div class="cart-product-info">
                    <span class="quantity">${quantity}</span>
                    <p>${product.name}</p>
                    <p>${totalPrice.toFixed(2)}</p>
                    <p class="change-quantity">
                        <button onClick="decreaseQuantity(${
                          product.id
                        })">-</button>
                        <button onClick="increaseQuantity(${
                          product.id
                        })">+</button>
                    </p>
                    <p class="cart-product-delete">
                        <button onClick=(deleteProductCart(${
                          product.id
                        }))>Eliminar</button>
                    </p>
                </div>
            </div>
        `;
        }
      });
    });
  }

  document.getElementsByClassName("cart-products")[0].innerHTML = html;
}

function deleteProductCart(idProduct) {
  const idProductsCart = localStorage.getItem(CART_PRODUCTOS);
  const arrayIdProductsCart = idProductsCart.split(",");
  const resultIdDelete = deleteAllIds(idProduct, arrayIdProductsCart);

  if (resultIdDelete) {
    let count = 0;
    let idsString = "";

    resultIdDelete.forEach(id => {
      count++;
      if (count < resultIdDelete.length) {
        idsString += id + ",";
      } else {
        idsString += id;
      }
    });
    localStorage.setItem(CART_PRODUCTOS, idsString);
  }

  const idsLocalStorage = localStorage.getItem(CART_PRODUCTOS);
  if (!idsLocalStorage) {
    localStorage.removeItem(CART_PRODUCTOS);
  }

  loadProductCart();
}

function increaseQuantity(idProduct) {
  const idProductsCart = localStorage.getItem(CART_PRODUCTOS);
  const arrayIdProductsCart = idProductsCart.split(",");
  arrayIdProductsCart.push(idProduct);

  let count = 0;
  let idsString = "";
  arrayIdProductsCart.forEach(id => {
    count++;
    if (count < arrayIdProductsCart.length) {
      idsString += id + ",";
    } else {
      idsString += id;
    }
  });
  localStorage.setItem(CART_PRODUCTOS, idsString);
  loadProductCart();
}

function decreaseQuantity(idProduct) {
  const idProductsCart = localStorage.getItem(CART_PRODUCTOS);
  const arrayIdProductsCart = idProductsCart.split(",");

  const deleteItem = idProduct.toString();
  let index = arrayIdProductsCart.indexOf(deleteItem);
  if (index > -1) {
    arrayIdProductsCart.splice(index, 1);
  }

  let count = 0;
  let idsString = "";
  arrayIdProductsCart.forEach(id => {
    count++;
    if (count < arrayIdProductsCart.length) {
      idsString += id + ",";
    } else {
      idsString += id;
    }
  });
  localStorage.setItem(CART_PRODUCTOS, idsString);
  loadProductCart();
}

function countDuplicatesId(value, arrayIds) {
  let count = 0;
  arrayIds.forEach(id => {
    if (value == id) {
      count++;
    }
  });
  return count;
}

function deleteAllIds(id, arrayIds) {
  return arrayIds.filter(itemId => {
    return itemId != id;
  });
}


// task of the thir installment

// JSON -- done
// local storage -- done
// DOM -- done
// Events -- done

// este proyecto es solo un prototipo(modelado) para la entrega final
// En mis anteriores entregas supero las 500 lines de codigo en mi aplicacion minimarket de consola POR LO QUE TUVE QUE HACER MUCHOS CAMBIOS

// Mejoras respecto a la anterior entrega
/*
    - Uso del ingles en la mayor parte del codigo
    - Codigo mas ordenado
    - Uso de nuevas funciones aprendidos dentro y fuera de clase
    - el anterior proyecto era un programa en consola, por lo que tuve que modelar todo con un html y css basicos (el uso de bootstrap es infimo pero esta pensado para mas adelante)

 */

// Que se espera (por mi parte) con respecto a la entrega final
/* 
    - Emplear algunas sugerencias de bootstrap para una web mas estética
    - Implementar el Login y toda la parte del menu que eso implique
    - Tener apartado el carrito de compras
    - Separar los articulos por categorias
*/

// NOTA: Este proyecto-3 es solo un borrador para organizar mis ideas de como quiero entregar mi proyecto final. Para la ultima entrega posiblemente haya cambios drasticos, ideas e imagenes nuevas no relacionadas a esta entrega.









function getColorFr(product)
{
  if (product == "Green")
      changeColor = "Vert";
  else if (product == "Black")
      changeColor = "Noir";
  else if (product == "Blue")
      changeColor = "Bleu";
  else if (product == "White")
      changeColor = "Blanc";
  else if (product == "Red")
      changeColor = "Rouge";
  else if (product == "Orange")
      changeColor = "Orange";
  else if (product == "Pink")
      changeColor = "Rose";
  else if (product == "Grey")
      changeColor = "Gris";
  else if (product == "Purple")
      changeColor = "Violet";
  else if (product == "Navy")
      changeColor = "Bleu Marine";
  else if (product == "Silver")
      changeColor = "Argent";
  else if (product == "Brown")
      changeColor = "Marron";
  else if (product == "Yellow")
      changeColor = "Jaune";
  else if (product == "Black/Yellow")
      changeColor = "Noir/Jaune";
  else if (product == "Black/Red")
      changeColor = "Noir/Rouge";
  else
  {
    changeColor = product;
  }
  return changeColor;
}

function deleteItem(element, valeur, index, suppValue)
{
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter((product) => 
    {
      console.log("LeProduct",product);
      let theElement = (product.id == element.id && product.color == element.color);
      console.log(theElement);
      if(theElement == true && valeur >= 2)
      {
        console.log("VAL", product.quantity);
        product.quantity -= (suppValue);
        console.log("prooood", product.quantity);
        if(product.quantity > 0)
          return (product.id == element.id && product.color == element.color);
      }
        return !(product.id == element.id && product.color == element.color);
    })
    console.log(JSON.stringify(newCart));
    localStorage.setItem('cart', JSON.stringify(newCart));
    location.reload();
}
  
async function getProduct()
{
    if(localStorage.getItem('cart') != null)
    {
      const theCart2 = localStorage.getItem('cart');
      console.log(theCart2);
      const theCart = JSON.parse(theCart2);
      let lengthCart = theCart.length;
      let i = 0;
      let nn = 0;
      nn = lengthCart - 1;
      console.log(nn);
      console.log(theCart[nn].color);
      const element = document.querySelector('#cart__items');
    
      console.log(nn);
      console.log(i);
      let totalQuantity = 0;
      let totalPrice = 0;
      while (i <= nn)  
      {    
        const response1 = await fetch(`http://localhost:3000/api/products/${theCart[i].id}`);
        const product = await response1.json();
        console.log('//');
        console.log(product._id);
        element.innerHTML += `<article class="cart__item" data-id="${product._id}" data-color="${theCart[i].color}">
                                <div class="cart__item__img">
                                  <img src="${product.imageUrl}">
                                </div>
                                <div class="cart__item__content">
                                  <div class="cart__item__content__description">
                                    <h2>${product.name}</h2>
                                    <p>${getColorFr(theCart[i].color)}</p>
                                    <p>${product.price}€</p>
                                  </div>
                                  <div class="cart__item__content__settings">
                                    <div class="cart__item__content__settings__quantity">
                                      <p>Qté : </p>
                                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${theCart[i].quantity}">
                                    </div>
                                    <div class="cart__item__content__settings__delete">
                                      <p class="deleteItem">Supprimer</p>
                                    </div>
                                  </div>
                                </div>
                              </article>`
        totalQuantity += theCart[i].quantity;
        totalPrice += theCart[i].quantity * product.price;
        i++;
      }
      const totalPriceElement = document.querySelector('#totalPrice');
      totalPriceElement.innerHTML = totalPrice;
      const totalQuant = document.querySelector('#totalQuantity');    
      totalQuant.innerHTML = totalQuantity;
      const valueSupp = document.querySelectorAll('.itemQuantity')
      const suppButtons = document.querySelectorAll('.deleteItem');
      console.log("suppbutton", suppButtons);
      suppButtons.forEach((suppButtons, index) =>
      {
          console.log("supp", suppButtons)
          suppButtons.addEventListener('click', () => 
          {
              if(valueSupp[index].value > valueSupp[index].defaultValue)
              {
                  alert("Erreur la quantité est supérieur au panier");
                  return;
              }
              alert('Element supprimer');
              console.log("Valeur" , valueSupp[index].defaultValue);
              console.log("theCart", theCart[index], index);
              deleteItem(theCart[index], valueSupp[index].defaultValue, index, valueSupp[index].value);
          })
      })
    }
}

getProduct();
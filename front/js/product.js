let theURL = window.location.search;
const theId = new URLSearchParams(theURL).get("id");

console.log(theURL);

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

async function getProduct()
{
  const response = await fetch(`http://localhost:3000/api/products/${theId}`);
  const product = await response.json();
  
  const element = document.getElementsByClassName('item__img')[0];
  element.innerHTML += `<img src="${product.imageUrl}" alt="Photographie d'un canapé">`
  const nameElement = document.getElementById('title');
  nameElement.innerHTML = product.name;
  const thePrice = document.getElementById('price');
  thePrice.innerHTML += product.price;
  const descriptionElem = document.getElementById(`description`);
  descriptionElem.innerHTML = product.description;
  console.log(product);

  const colorSelect = document.getElementById('colors')
  let i = 0;
  let changeColor = "none";
  let theQuantity = 0;
  let thePrices = 0;
  let getId = "NULL";
  let total = 0;
  while(i < product.colors.length)
  {
      changeColor = getColorFr(product.colors[i]);
      colorSelect.innerHTML += `<option value="${product.colors[i]}">${changeColor}</option>`;
      i++;
  }
  const addToBuy = document.getElementById("addToCart");
  addToBuy.addEventListener('click', (i) => 
  {
    const theQuant = document.getElementById("quantity");
    const colorSelect = document.getElementById("colors");
    const selectedColor = colorSelect.value;
    theQuantity = Number(theQuant.value);
    getId = product._id;
  
    if(colorSelect != "" && (theQuantity > 0 && theQuantity <= 100 && theQuantity != ""))
    {
        const cartString = localStorage.getItem('cart');
        console.log(cartString);
        let cart = JSON.parse(cartString || "[]");
        let selectedItem = {
            id : getId,
            color : selectedColor,
            quantity : theQuantity,

        }
        const itemExistIndex = cart.findIndex((item) => item.id === selectedItem.id && item.color === selectedItem.color);
        if(itemExistIndex >= 0)
        {
            cart[itemExistIndex].quantity += theQuantity;
        }
        else
        {
            cart.push(selectedItem);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Votre achat à été ajouté au panier');
    }
    else
    {
        alert('Veuillez selectionner une quantité et une couleur');
    }
  });
}

getProduct();


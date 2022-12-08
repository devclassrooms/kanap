let theURL = window.location.search;
const theId = new URLSearchParams(theURL).get("id");

console.log(theId);

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
  console.log(product);
  
  const element = document.getElementsByClassName('item__img')[0];
  element.innerHTML += `<img src="${product.imageUrl}" alt="Photographie d'un canapé">`
  const nameElement = document.getElementById('title');
  nameElement.innerHTML = product.name;
  const thePrice = document.getElementById('price');
  //console.log(thePrice);
  thePrice.innerHTML += product.price;
  //console.log(thePrice);
  const descriptionElem = document.getElementById(`description`);
  descriptionElem.innerHTML = product.description;
  /*let choseColor = document.getElementsByClassName('corlors-2');
  choseColor.innerHTML += 
  `<option value="vert">vert</option>`;
  console.log(choseColor);*/

  let items3 = document.getElementById('colors')
  let i = 0;
  let changeColor = "none";
  while(i < product.colors.length)
  {
      changeColor = getColorFr(product.colors[i])
      items3.innerHTML += `<option value="${product.colors[i]}">${changeColor}</option>`;
      console.log(product.colors[i]);
      i++;
  }
  const addToBuy = document.getElementById("addToCart");
  console.log(addToBuy);
  addToBuy.addEventListener('click', () => console.log('hello'));
  let theColors = document.getElementById("colors");
  let typeColors = theColors.value
  console.log(typeColors);
  
}

getProduct();


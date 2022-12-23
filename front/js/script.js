/*const items = document.getElementById('items');

const container = document.createElement('div');
container.innerHTML = " <a href = 'index.html'> bonjour </a>";

items.appendChild(container);

console.log(items);
items.addEventListener('click', () =>
{
    console.log("clické");
    alert("clicker");
})
console.log(items);*/

/*async function getProducts()
{
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();
  console.log(products);
  const items = document.getElementById('items')
  products.forEach(product => 
  {
    items.innerHTML += 
    `<a href="./product.html?id=42">
      <article>
        <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
        <h3 class="productName">${product.name}</h3>
        <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
      </article>
    </a>`;
  });
}

getProducts();*/
/*fetch(`http://localhost:3000/api/products/`)
  .then(abc => abc.json())
  .then(def => console.log(def))*/

async function getOther()
{
    const produit = await fetch(`http://localhost:3000/api/products/`);
    const nextprod = await produit.json();
    /*console.log(nextprod);*/
    let items5 = document.getElementById('items');
    /*const autre = nextprod[0];*/
    /*console.log(nextprod.length);*/
    let cmp = 0;
    while(cmp < nextprod.length)
    {
      items5.innerHTML += 
       `<a href="./product.html?id=${nextprod[cmp]._id}">
        <article>
        <img width="200px" src="${nextprod[cmp].imageUrl}" alt="${nextprod[cmp].altTxt}">
        <h3 class="productName">${nextprod[cmp].name}</h3>
        <p>${nextprod[cmp].description}</p>
        </article>
        </a>`
        cmp++;
    }
}
getOther();

/*let items2 = document.getElementById('items')

items2.innerHTML += 
`<a href="./product.html?id=107fb5b75607497b96722bda5b504926">
<article>
<img width="200px" src="../../back/images/kanap01.jpeg" alt="Canape Bleu">
<h3 class="productName">Kanap Sinopé</h3>
<p>Canapé bleu, deux places</p>
</article>
</a>
<a href="./product.html?id=415b7cacb65d43b2b5c1ff70f3393ad1">
<article>
  <img width="200px" src="../../back/images/kanap02.jpeg" alt="canape beige">
  <h3 class="productName">Kanap Cyllène</h3>
  <p>Canapé jaune et noir, quattre places</p>
</article>
</a>
<a href="./product.html?id=055743915a544fde83cfdfc904935ee7">
<article>
  <img width="200px" src="../../back/images/kanap03.jpeg" alt="canape vert">
  <h3 class="productName">Kanap Calycé</h3>
  <p>Canapé d'angle, vert, trois places</p>
</article>
</a>
<a href="./product.html?id=a557292fe5814ea2b15c6ef4bd73ed83">
<article>
  <img width="200px" src="../../back/images/kanap04.jpeg" alt="canape rose">
  <h3 class="productName">Kanap Autonoé</h3>
  <p>Canapé rose, une à deux place</p>
</article>
</a>
<a href="./product.html?id=8906dfda133f4c20a9d0e34f18adcf06">
<article>
  <img width="200px" src="../../back/images/kanap05.jpeg" alt="Canape noir">
  <h3 class="productName">Kanap Eurydomé</h3>
  <p>Canapé gris, trois places</p>
</article>
</a>
<a href="./product.html?id=77711f0e466b4ddf953f677d30b0efc9">
<article>
  <img width="200px" src="../../back/images/kanap06.jpeg" alt="canape noir">
  <h3 class="productName">Kanap Hélicé</h3>
  <p>Canapé gris, deux places</p>
</article>
</a>
<a href="./product.html?id=034707184e8e4eefb46400b5a3774b5f">
<article>
  <img width="200px" src="../../back/images/kanap07.jpeg" alt="canape rouge">
  <h3 class="productName">Kanap Thyoné</h3>
  <p>Canapé rouge, deux places</p>
</article>
</a>
<a href="./product.html?id=a6ec5b49bd164d7fbe10f37b6363f9fb">
<article>
  <img width="200px" src="../../back/images/kanap08.jpeg" alt="canape rose">
  <h3 class="productName">Kanap orthosie</h3>
  <p>Canapé rose, trois places</p>
</article>
</a>`;

console.log(items2);

/*async function getProducts()
{
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();
  console.log(products);
}

getProducts();*/





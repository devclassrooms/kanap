async function getOther()
{
    const produit = await fetch(`http://localhost:3000/api/products/`);
    const nextprod = await produit.json();
    let items5 = document.getElementById('items');
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

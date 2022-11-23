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
    products.forEach(product => {
        items.innerHTML += /*` <a href="./product.html?id=42">
        <article>
          <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
        </article>
      </a>`;
    });
}

getProducts();*/

let items2 = document.getElementById('items')

items2.innerHTML += `<a href="./product.html?id=42">
<article>
<img width="200px" src="../../back/images/kanap01.jpeg" alt="Canape Bleu">
<h3 class="productName">Kanap Bleu</h3>
<p>Beau canape bleu</p>
</article>
</a>
<a href="./product.html?id=42">
<article>
  <img width="200px" src="../../back/images/kanap02.jpeg" alt="canape beige">
  <h3 class="productName">Kanap Beige</h3>
  <p>Beau canape beige</p>
</article>
</a>
<a href="./product.html?id=42">
<article>
  <img width="200px" src="../../back/images/kanap03.jpeg" alt="canape vert">
  <h3 class="productName">Kanap Vert</h3>
  <p>Beau canape vert</p>
</article>
</a>
<a href="./product.html?id=42">
<article>
  <img width="200px" src="../../back/images/kanap04.jpeg" alt="canape rose">
  <h3 class="productName">Kanap Rose</h3>
  <p>Beau canape rose</p>
</article>
</a>
<a href="./product.html?id=42">
<article>
  <img width="200px" src="../../back/images/kanap05.jpeg" alt="Canape noir">
  <h3 class="productName">Kanap Noir</h3>
  <p>Beau canape noir</p>
</article>
</a>
<a href="./product.html?id=42">
<article>
  <img width="200px" src="../../back/images/kanap06.jpeg" alt="canape noir">
  <h3 class="productName">Kanap Noir</h3>
  <p>Beau canape noir</p>
</article>
</a>
<a href="./product.html?id=42">
<article>
  <img width="200px" src="../../back/images/kanap07.jpeg" alt="canape rouge">
  <h3 class="productName">Kanap rouge</h3>
  <p>Beau canape rouge</p>
</article>
</a>
<a href="./product.html?id=42">
<article>
  <img width="200px" src="../../back/images/kanap08.jpeg" alt="canape rose">
  <h3 class="productName">Kanap Rose</h3>
  <p>Beau canape Rose</p>
</article>
</a>`;

console.log(items2);

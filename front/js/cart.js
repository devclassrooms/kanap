

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

function updateQuantity(newQuantity, id, color)
{
    const cart = JSON.parse(localStorage.getItem('cart'));
    const productIndex = cart.findIndex(product =>
        {
            return (product.id === id && product.color === color);
        })
    cart[productIndex].quantity = Number(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

function deleteItem(element)
{
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter((product) => 
    {
        return !(product.id == element.id && product.color == element.color);
    })
    localStorage.setItem('cart', JSON.stringify(newCart));
    location.reload();
}

async function prepareOrder(contact)
{
    try {
        
        const cart = JSON.parse(localStorage.getItem('cart'));
        const body = {
            contact:contact, 
            products: cart.map((product) =>
            {
                return product.id
            })
        };
        const response = await fetch(`http://localhost:3000/api/products/order`,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        location.replace(`confirmation.html?orderId=${result.orderId}`)
    } catch (error) {
        alert("Une erreur est survenue");
    }

}

function checkError(theForm, i)
{
    if(i == 0 || i == 1 || i == 3)
    {
        const regex = /^[a-zA-Z\sáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/
        const isValid = regex.test(theForm[i].value.trim());
        return isValid;
    }
    else if(i == 2)
    {
        const regex = /^[0-9]+\s+[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+\s+[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/
        const isValid = regex.test(theForm[i].value.trim());
        return isValid;
    }
    else if(i == 4)
    {
        const regex = /[a-zA-Z0-9]+@+[a-zA-Z].[a-zA-Z]+/
        const isValid = regex.test(theForm[i].value.trim());
        return isValid;
    }
    else
    {
        return true;
    }

}

function removeAll()
{
    let remove1 = document.querySelector('#firstNameErrorMsg');
    remove1.innerHTML = " ";
    let remove2 = document.querySelector('#lastNameErrorMsg');
    remove2.innerHTML = " ";
    let remove3 = document.querySelector('#addressErrorMsg');
    remove3.innerHTML = " ";
    let remove4 = document.querySelector('#cityErrorMsg');
    remove4.innerHTML = " ";
    let remove5 = document.querySelector('#emailErrorMsg');
    remove5.innerHTML = " ";
}

async function getProduct()
{ 
    
    if(localStorage.getItem('cart') != null)
    {
        const theCart2 = localStorage.getItem('cart');
        const theCart = JSON.parse(theCart2);
        let lengthCart = theCart.length;
        let i = 0;
        const element = document.querySelector('#cart__items');
        let totalQuantity = 0;
        let totalPrice = 0;
        while (i <= (lengthCart - 1))  
        {    
            const response1 = await fetch(`http://localhost:3000/api/products/${theCart[i].id}`);
            const product = await response1.json();
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
        suppButtons.forEach((suppButton, index) =>
        {
            suppButton.addEventListener('click', () => 
            {
                deleteItem(theCart[index]);
            })
        })
        const itemQuantityInputs = document.querySelectorAll('.itemQuantity');
        itemQuantityInputs.forEach((itemQuantityInput, index) => 
        {
            itemQuantityInput.addEventListener('change', (event) =>
            {
                updateQuantity(event.target.value, theCart[index].id, theCart[index].color);
            })
        })
        const orderItem = document.querySelector('#order');
        const theForm = document.querySelector('.cart__order__form').elements;
        orderItem.addEventListener('click', (t) =>
        {
            t.preventDefault();
            let i = 0;                      
            while(i <= 4)
            {
                if(!(checkError(theForm, i)))
                {
                    if(i == 0)
                    {
                        let messageError0 = document.querySelector('#firstNameErrorMsg');
                        messageError0.innerHTML = `Veuillez indiquer votre prénom`;
                    }
                    else if(i == 1)
                    {
                        removeAll();
                        let messageError1 = document.querySelector('#lastNameErrorMsg');
                        messageError1.innerHTML = `Veuillez indiquer votre nom`;
                    }
                    else if(i == 2)
                    {
                        removeAll();
                        let messageError2 = document.querySelector('#addressErrorMsg');
                        messageError2.innerHTML = `Veuillez indiquer votre adresse`;
                    }
                    else if(i == 3)
                    {
                        removeAll();
                        let messageError3 = document.querySelector('#cityErrorMsg');
                        messageError3.innerHTML = `Veuillez indiquer votre ville ex:10 rue nom`;
                    }
                    else if(i == 4)
                    {
                        removeAll();
                        let messageError4 = document.querySelector('#emailErrorMsg');
                        messageError4.innerHTML = `Veuillez indiquer votre email`;
                    }
                    else
                    {
                        removeAll();
                        let remove5 = document.querySelector('#emailErrorMsg');
                        remove5.innerHTML = " ";
                    }
                    return;
                }
                i++;   
            }
             prepareOrder({
                firstName : theForm[0].value,
                lastName : theForm[1].value,
                address : theForm[2].value,
                city : theForm[3].value,
                email : theForm[4].value
             })
        })
    }
}
getProduct();

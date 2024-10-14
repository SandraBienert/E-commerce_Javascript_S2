// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;


// Exercise 1
function buy(id) {
   
    let productId = id;
    let product = null;
    
    // 1. Funció per afeagirnproductes al carret amb LOOP

    for (let i = 0; i < products.length; i++) {

        if (products[i].id === productId) {
            product = products[i];
            break;
       }
        
    }

    console.log(product);

    // 2. Comprovar si el producte ja està al carrer

    if (product) {
        
        let cartItem = null;

        for (let i = 0; i < cart.length; i++){

            if (cart[i].id === productId) {
                cartItem = cart[i];
                break;
            }

        }
     
        if (cartItem) {

            //si el producte ja està al carret,afegir la quantitat 1
            
            cartItem.quantity += 1; 
            console.table(cartItem)
        
        } else {
            //Si no esta afegim quantitat 1 

            cart.push({...product, quantity: 1});
            console.table(cart);

        }

    } else {
        console.log("Producte No trobat")
    }

    console.table (cart);

}


// Exercise 2
function cleanCart() {

    cart = [];

    document.getElementById('total_price').innerHTML = '';
    document.getElementById('cart_list').innerHTML = '';
        
  
}



// Exercise 3

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }

    console.log("El total de $ que hi ha al carret: ", total, "$");


    return total;
}


//calculateTotal(); //ENCARA NO SE a quin BUTTOM va


// Exercise 4
function applyPromotionsCart() {
       
    for (let i = 0; i < cart.length; i++) {
           
        const product = cart[i];

            if (product.type === "grocery" && product.name === "cooking oil" && product.quantity >= 3) {
                
                product.subtotalWithDiscount = product.price * product.quantity * 0.8; // 20% de descompte
            
            } else if (product.type === "baking" && product.name === "cake mix" && product.quantity >= 10) {
                
                product.subtotalWithDiscount = product.price * product.quantity * 0.7; // 30% de descompte
            
            } else {
               
                product.subtotalWithDiscount = product.price * product.quantity; // sense descompte
            }
        }
    }

//applyPromotionsCart()

// Exercise 5
function printCart() {
   
    const cartModal = document.getElementById('cartModal');
    const tableBody = cartModal.querySelector('tbody');

    //netejar 

    tableBody.innerHTML = '';

    cart.forEach(product => {
        const row = document.createElement('tr');

        //Cel-les de la fila
        const cellName = document.createElement('td');
        cellName.textContent = product.name;
        row.appendChild(cellName);

        const cellPrice = document.createElement('td');
        cellPrice.textContent = `$${product.price.toFixed(2)}`;
        row.appendChild(cellPrice);

        const cellQuantity = document.createElement('td');
        cellQuantity.textContent = product.quantity;
        row.appendChild(cellQuantity);

        const cellTotal = document.createElement('td');
        cellTotal.textContent = `$${(product.price * product.quantity).toFixed(2)}`;
        row.appendChild(cellTotal);

        //afegim la fila al cos de la taula
        tableBody.appendChild(row);

    });

    //ACtualitzar el carret

    const total_price = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    const totalCell = cartModal.querySelector('#total_price');

    if (totalCell) {
        
        totalCell.textContent = `$${total_price.toFixed(2)}`;
    }

    //mostrar modal
    (cartModal).modal('show');

}

//document.getElementById('showCartButton').addEventListener('click', printCart)

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}
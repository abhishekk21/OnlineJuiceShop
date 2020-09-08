let cart = [];
let itemInCart = [];

let total = 0;

function addFunction(num) {
    alert("Item added succesfully!")
    let word =document.getElementsByName("buttons")[num].value;
    cart.push(word);
    let item = document.getElementsByName("tagline")[num].innerHTML;
    itemInCart.push(item);
    alert(item);
}

function checkOut() {
    for (i=0;i<cart.length;i++){
        total = parseInt(total) + parseInt(cart[i]);
    }
    
    alert("Your Items:-");
    alert(itemInCart);
    alert("Your total price: ");
    alert(total);
    
}
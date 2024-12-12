const custom_button = document.querySelector("#custom");
const size_buttons = document.querySelectorAll(".btn-group input[type=radio]");
const shape_span = document.querySelector("#d-shape");
const size_span = document.querySelector("#d-size");
const design_span = document.querySelector("#d-design");
let input_custom = document.querySelector("#input_custom");
const ready_button = document.querySelector("#ready");
const shapes = document.querySelector("#shapes");
const img_designs = document.querySelector("#img-designs");
const shopping_cart = document.querySelector(".shopping-cart");
let random_number = 0;
const headboard_prices = [1200, 2500, 1600, 2300, 2222];
let total_price = 0;
const total_display = document.querySelector("#total");



/* Event for toggling disabled and active buttons*/
custom_button.addEventListener("click", ()=>{
    input_custom = document.querySelector("#input_custom");
    custom_button.classList.toggle("active");
    input_custom.disabled = !input_custom.disabled;
    input_custom = document.querySelector("#input_custom").value;


    /* Disable button-group if custom pressed or input not empty */
    size_buttons.forEach(e => {
        e.checked = false;
        size_span.innerHTML = "";
        /* If input empty enable btn-group else insert into size_span input value */
        if (!input_custom) {
            e.disabled = !e.disabled;
        } else{
            size_span.innerHTML = input_custom;
        }
    });
});

/* Event that inserts values into size pan as user types them*/
input_custom.addEventListener("input", (e)=>{
        size_span.innerHTML = e.target.value;
})


/* Event for changing value of Size Span */
size_buttons.forEach(e =>{
  e.addEventListener("click", ()=>{
    size_span.innerHTML = e.value;
  });  
});

/* Set shape span value of selected shape */
shapes.addEventListener("click", (e)=>{
    if(e.target.getAttribute("data-value")){
        shape_span.innerHTML = e.target.getAttribute("data-value");
    }
})

/* Insert selected design and make visible */
img_designs.addEventListener("click", (e)=>{
    document.querySelector("#img-headboard").classList.remove("invisible");
    document.querySelector("#img-headboard").classList.add("visible");
    if (e.target.getAttribute("data-value")) {
        design_span.innerHTML = e.target.getAttribute("data-value");
        document.querySelector("#img-headboard").setAttribute("src", e.target.getAttribute("src"));
    }
});


ready_button.addEventListener("click", ()=>{
    random_number = Math.floor(Math.random() * headboard_prices.length);
    total_price += headboard_prices[random_number];
    total_display.innerHTML = total_price;
    if(size_span.innerHTML && shape_span.innerHTML && design_span.innerHTML){
        console.log("hola");
        shopping_cart.innerHTML += `<div class="d-flex justify-content-between align-items-center">
        <li>Cabecero ${shape_span.innerHTML}<br>Medida: ${size_span.innerHTML}<br>Diseño: ${design_span.innerHTML}<br>Precio: ${headboard_prices[random_number]}€</li>
        <img src="../assets/images2/bin.png" alt="recycle bin icon" data-value="${headboard_prices[random_number]}">
      </div>`;
    }
});

/* Delete item in cart */
shopping_cart.addEventListener("click", (e)=>{
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        total_price -= e.target.getAttribute("data-value");
        total_display.innerHTML = total_price;
    }
});










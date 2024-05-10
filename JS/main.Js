const producctos = document.querySelector(".card")

function agregarProducto() {
    const nuevoProducto = document.createElement("card");
    nuevoProducto.className = "card"; 
    const nombreProducto = document.createElement("h2");
    nombreProducto.textContent = "Altavoces";
  
    const precioProducto = document.createElement("p");
    precioProducto.textContent = "Precio: $100";
    

    nuevoProducto.appendChild(nombreProducto);
    nuevoProducto.appendChild(precioProducto);
  
  
    const cajaProductos = document.getElementById("cajaProductos");
  
   
    cajaProductos.appendChild(nuevoProducto);
  }
  

const inventario = document.querySelectorAll(".card");
const productos = document.querySelectorAll(".button");
const addItems = [];
const Car = document.getElementById("carro")

const chargercar = () =>{
    Car.innerHTML = " "
    addItems.forEach((productos)=>{
        Car.innerHTML += productos
    })
}

productos.forEach((button) => {
    button.addEventListener("click", (e) => {
        const ItemContainer = e.target.parentElement.innerHTML;
        addItems.push(ItemContainer);
        chargercar()
        console.log(e);
    });
});

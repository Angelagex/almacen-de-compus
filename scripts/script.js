const jome = document.getElementById("jome");
jome.addEventListener("click", homeshow);
function homeshow() {
    document.getElementById('home').setAttribute("style","display:inline-block");
    document.getElementById('compra').setAttribute("style","display:none");
} 
function comprashow() {
    document.getElementById('compra').setAttribute("style","display:inline-block");
    document.getElementById('home').setAttribute("style","display:none");
}

const precioporpc = 820000;

document.getElementById("ncompusub").addEventListener("click",compra)

function compra() {
let ncompus = parseInt(document.getElementById("ncompu").value);
let subtotal, descuento, total;

if (ncompus < 2 || ncompus > 12) {
    subtotal= ncompus*precioporpc;
    descuento= 0%subtotal;
    total = ncompus*precioporpc-descuento;
    document.getElementById("subtotal").setAttribute("value",subtotal);
    document.getElementById("total").setAttribute("value",total);
    document.getElementById("descuento").setAttribute("value","No aplica");
}
else if (ncompus>1 && ncompus<5){
    subtotal = ncompus*precioporpc;
    descuento = subtotal*0.15;
    total = subtotal-descuento;
    document.getElementById("subtotal").setAttribute("value"," $ " + subtotal);
    document.getElementById("total").setAttribute("value"," $ " + total);
    document.getElementById("descuento").setAttribute("value"," 15%  ($"+ descuento +")");

}
else if (ncompus>4 && ncompus<9){
    subtotal= ncompus*precioporpc;
    descuento= subtotal*0.25;
    total = subtotal-descuento;
    document.getElementById("subtotal").setAttribute("value"," $ " + subtotal);
    document.getElementById("total").setAttribute("value"," $ " + total);
    document.getElementById("descuento").setAttribute("value"," 25%  ($"+ descuento +")");
}
else if (ncompus>8 && ncompus<13){
    subtotal= ncompus*precioporpc;
    descuento= subtotal*0.35;
    total = subtotal-descuento;
    document.getElementById("subtotal").setAttribute("value"," $ " + subtotal);
    document.getElementById("total").setAttribute("value"," $ " + total);
    document.getElementById("descuento").setAttribute("value"," 35%  ($"+ descuento +")");
}
}
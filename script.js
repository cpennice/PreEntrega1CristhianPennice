let valorTotal = 0;
let numeroDeArticulos = prompt(
  "¿Cuántos artículos deseas agregar a tu carrito?"
);
for (let i = 0; i < numeroDeArticulos; i++) {
  let nombreArticulo = prompt(
    "Ingrese el nombre del artículo " + (i + 1) + ":"
  );
  let precioArticulo = parseFloat(
    prompt("Ingrese el precio de " + nombreArticulo + ":")
  );
  let cantidadArticulo = parseInt(
    prompt("Ingrese la cantidad de " + nombreArticulo + ":")
  );
  if (cantidadArticulo > 0) {
    valorTotal += precioArticulo * cantidadArticulo;
  }
}
alert("El valor total de los artículos en tu carrito es $" + valorTotal);

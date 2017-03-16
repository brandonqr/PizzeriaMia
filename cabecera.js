//simular llenar productes, para el contador
arraydeProductos=[];
arraydeProductos.push("producte1")
function Cabecera(logo,titulo,carrito) {
	this.logo=logo;
	this.titulo=titulo;
	this.carrito=carrito;

	this.crearCabecera=function() {
		var divCabecera=$("<div>").addClass("cabecera");
		var cLogo=$("<img>").addClass("cLogo").attr("src",this.logo);
		var cTitulo=$("<div>").addClass("cTitulo").html(this.titulo);
		divCabecera.append(cLogo,cTitulo,this.carrito);

		$("body").append(divCabecera);

	}
	this.crearCabecera();

}
function Carrito() {
	arraydeProductos//variable global
	var imagenCarrito="img/carrito.png"
	var divCarrito=$("<div>").addClass("carrito");
	var carritoImagen=$("<img>").addClass("carritoImagen").attr("src",imagenCarrito);
	var contadorCarrito=$("<div>").addClass("contadorCarrito").html(arraydeProductos.length);
	divCarrito.append(carritoImagen,contadorCarrito);
	divCarrito.click(function() {
		alert("carrito hover");
	})
	return divCarrito;
}
var carrito= new Carrito();
new Cabecera("img/logo.png", "titulo", carrito)
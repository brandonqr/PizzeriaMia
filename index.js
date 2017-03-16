function Producto(imagen, nombre, descripcion, precio) {
	this.imagen=imagen;
	this.nombre=nombre;
	this.descripcion=descripcion;
	this.precio=precio;
	this.crearProducto=function() {
		var divProducto=$("<div>").addClass("producto");
		var pImagen=$("<p>").addClass("pImagen");
		var pNombre=$("<p>").addClass("pNombre");
		var pDescripcion=$("<p>").addClass("pDescripcion");
		var pPrecio=$("<p>").addClass("pPrecio");
		divProducto.append(pImagen);
		$("body").append(divProducto);
	}
}
new Producto("imagen", "nombre", "descripcion", "precio")
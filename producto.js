arraydeProductos=[];
$("body").append(new Cesta() )
function Producto(imagen, nombre, descripcion, precio) {
	this.imagen=imagen;
	this.nombre=nombre;
	this.descripcion=descripcion;
	this.precio=precio;
	that=this;
	this.crearProducto=function() {
		var divProducto=$("<div>").addClass("producto").attr("id",this.nombre);
		var pImagen=$("<img>").addClass("pImagen").attr("src",this.imagen)
		var pNombre=$("<div>").addClass("pNombre").html(this.nombre);
		var pDescripcion=$("<div>").addClass("pDescripcion").html(this.descripcion);
		var pPrecio=$("<div>").addClass("pPrecio").html(this.precio);
		var btnAgregar=$('<button>').addClass("pAgregar").html("agregar").css({display:"none"});

		divProducto.append(pNombre, pImagen, pDescripcion,pPrecio,btnAgregar);

		divProducto.on("mouseover",function() {
			btnAgregar.css({display:"inline-block"});
		})
		divProducto.on("mouseout",function() {
		btnAgregar.css({display:"none"});
		})
		btnAgregar.click(function() {//este click agrega a la cesta
			console.log(that);
			arraydeProductos.push(that)
			$('#contadorCesta').html(arraydeProductos.length)
		})
		$("body").append(divProducto);
	}
	this.crearProducto();
}
var a=new Producto("img/PIZZA.png", "hawaiana", "descripcion", "precio")
var b=new Producto("img/PIZZA.png", "barbacoa", "descripcion", "precio")
var pene=new Producto("img/PIZZA.png", "chochos", "descripcion", "precio")


function Cesta() {
	that=this;
	var imagenCesta="img/carrito.png"
	var divCesta=$("<div>").addClass("carrito");
	var carritoImagen=$("<img>").addClass("carritoImagen").attr("src",imagenCesta);
	var contadorCesta=$("<div>").addClass("contadorCesta").attr("id","contadorCesta").html("0");
	var divMostrarProductos=$("<div>").addClass("divcontenedorProductos").css({backgroundColor:"red",width:"500px", height:"500px",display:"none"})
	divCesta.click(function() {
		divMostrarProductos.empty();
		for (var i = 0; i < arraydeProductos.length; i++) {
			var imagenProductoCesta=$("<img>").addClass("imagenProductoCesta").attr("src",arraydeProductos[i].imagen);
			var nombreProductoCesta=$("<div>").addClass("nombreProductoCesta").html(arraydeProductos[i].nombre);
			var descripcionProductoCesta=$("<div>").addClass("descripcionProductoCesta").html(arraydeProductos[i].descripcion);
			var precioProductoCesta=$("<div>").addClass("precioProductoCesta").html(arraydeProductos[i].precio);
			divMostrarProductos.append(imagenProductoCesta,nombreProductoCesta,descripcionProductoCesta,precioProductoCesta);
		}
		divMostrarProductos.css("display","inline-block")
		
	})
	divCesta.on("mouseout",function() {
		divMostrarProductos.css("display","none")
	})
	divCesta.append(carritoImagen,contadorCesta,divMostrarProductos);
	$("body").append(divCesta);
}

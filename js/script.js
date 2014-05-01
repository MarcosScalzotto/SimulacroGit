function validar(){
	//Marcos
	var nombre = document.getElementById('nom').value; 
 	var expRegNom = /[a-zA-Z]/;

if(nombre == ""){
	alert("El campo nombre no puede estar vacio");
	return false;
}else if(!(expRegNom.test(nombre))){
 	alert("El nombre solo puede contener letras");
 	return false;
 }

//Natalia
var sexof = document.getElementsById('fem');
var sexom = document.getElementsById('masc');
if(sexof.checked == false && sexom.checked == false)
 {
  alert("No se ha seleccionado ningun sexo");
   return false;
 }
 
 return true;
 

}
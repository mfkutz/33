const nombre = "Martin";
console.log(nombre);

//Object wrapper, objeto que envuelve a un valor primitivo cuando queremos acceder a una propiedad o llamar a un metodo del mismo, luego de utilzarlo, lo desecha
console.log(nombre.toUpperCase());

//Null es un tipo de dato PRIMITIVO, aunque devuelva object
console.log(typeof null); //devolvera tipo object, esto es un bug de los comienzos de js, que ya es tarde para arreglarlo ya que varios sitios web dependen de el para funcionar

if (null) {
  console.log("Esto no se va a ejecutar");
} else {
  console.log("Esto si, porque NULL es un valor FALSO");
}

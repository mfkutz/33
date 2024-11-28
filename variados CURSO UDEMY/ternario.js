const saldo = 1000;
const pagar = 1200;
const tarjeta = false;
const naranjax = true;

// saldo > pagar
//   ? console.log("Si, puedes pagar con saldo")
//   : tarjeta
//   ? console.log("Puedes pagar con tarjeta")
//   : naranjax
//   ? console.log("Puedes pagar con naranjax")
//   : console.log("No, no puedes pagar");

//No es recomendado tener mas de 2 niveles, por lo tanto podemos usar || o && segun el caso que necesitemas
//Ejemplo

saldo > pagar || tarjeta || naranjax
  ? console.log("SI, puedes pagar con todos los metodos de pago")
  : console.log("No puedes pagar, seco");

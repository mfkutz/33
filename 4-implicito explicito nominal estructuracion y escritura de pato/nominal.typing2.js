// 1. Usando símbolos únicos ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Los símbolos en JavaScript son únicos y pueden usarse como
//  identificadores nominales para evitar confusiones entre tipos.
const UserIDType = Symbol("UserID");
const ProductIDType = Symbol("ProductID");

function createUserID(valor) {
  return { type: UserIDType, valor };
}

function createProductID(valor) {
  return { type: ProductIDType, valor };
}

function processUserId(id) {
  if (id.type !== UserIDType) {
    throw new Error("Invalid type: expected UserID");
  }
  console.log("Processing UserID:", id.valor);
}

const userId = createUserID(123);
const productId = createProductID(456);

processUserId(userId); // Esto debería funcionar sin errores.
// processUserId(productId2); // Lanza un error porque no es un UserID

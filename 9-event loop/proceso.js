// Call Stack (Pila de Ejecución)
//   | --> Código síncrono (ejecución secuencial)

// Web APIs (Manejo de operaciones asíncronas)
//   | --> setTimeout, Promesas, Eventos, etc.

// Callback Queue (Cola de Tareas)
//   | --> Callback de operaciones asíncronas resueltas (ej. callback de setTimeout)

// Event Loop
//   | --> Monitorea Call Stack y Callback Queue, y mueve tareas cuando la Call Stack está vacía.

// Resumen simplificado del flujo de ejecución en JavaScript:
// Todo lo síncrono se ejecuta directamente en la call stack (pila de ejecución),
// uno por uno, de manera secuencial.

// Todo lo asíncrono (como setTimeout, promesas, eventos, etc.) se pasa a las Web APIs
// para que se gestionen de manera independiente del flujo principal. Estas Web APIs manejan
// las operaciones asíncronas mientras el código síncrono sigue ejecutándose.

// Una vez que una operación asíncrona se ha resuelto (por ejemplo, el tiempo del
//  setTimeout ha terminado o una promesa se ha resuelto), su callback o función asociada
//  se coloca en la callback queue (también conocida como task queue).

// El event loop monitorea constantemente la call stack y la callback queue. Cuando
//  la call stack está vacía (es decir, no hay más código síncrono en ejecución), el
// event loop mueve el primer elemento de la callback queue a la call stack para ejecutarlo.

// Finalmente, el código que estaba en la callback queue se ejecuta como si fuera
// parte del flujo normal, pero solo después de que todo el código síncrono haya
// terminado y la call stack esté vacía.

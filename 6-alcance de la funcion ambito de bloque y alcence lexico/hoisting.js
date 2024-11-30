// Cuando las declaraciones "se elevan al principio", se refiriende al comportamiento interno de JavaScript al momento de ejecutar el código. Es decir, antes de que el código sea ejecutado, el motor de JavaScript revisa todo el código, identifica las declaraciones (de variables y funciones), y las coloca en el ámbito correspondiente (ya sea en el contexto global o dentro de una función) en una fase de preparación. Esto es lo que se llama hoisting.

// Para hacerlo más claro, imagina que el código que escribimos es interpretado en dos fases:

// Fase de compilación (hoisting): JavaScript recorre el código y eleva todas las declaraciones de variables y funciones, pero no sus valores. Se "prepara" el entorno para que las variables y funciones existan desde el principio del contexto en el que se encuentran (por ejemplo, dentro de una función o en el ámbito global).

// Fase de ejecución: Después de esta fase de "compilación", se empieza a ejecutar el código línea por línea. Aquí es cuando se asignan los valores a las variables y se ejecutan las funciones.

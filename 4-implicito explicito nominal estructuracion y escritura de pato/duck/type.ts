interface Animal {
    nombre: string
    sonido: () => void
}

const perro = {
    nombre: "Firulais",
    sonido: () => console.log("Guau")
}

const hacerSonido = (animal: Animal) => {
    console.log(animal.nombre)
    animal.sonido()
}

hacerSonido(perro)
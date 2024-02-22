let num1 = parseInt(prompt('Ingrese el precio de las naranjas'))
let num2 = parseInt(prompt('Ingrese el precio de las bananas'))
let num3 = parseInt(prompt('Ingrese el precio de las manzanas'))

if (num1 > num2 && num1 > num3) {
    document.write("Las naranjas son las frutas más caras")
} else if (num2 > num3) {
    document.write("Las Bananas son las más caras")
} else {
    document.write("Las manzanas son las más caras")
}
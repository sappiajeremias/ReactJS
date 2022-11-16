const arregloNum = [1, 2, 3, 4, 5, 6, 7, 8];

const find = (arreglo, funcion) => {
    for (let num of arreglo) {
        if (funcion(num)) {
            return num;
        }
    }
}

const funcion = (num) => {
    return (num / 2) == 4;
}

const arregloFinal = find(arregloNum, funcion);
console.log(arregloFinal);
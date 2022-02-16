import dataBase from "./consulta.js";
const getSonidoAnimal = async(animal) => {
    const { animales } = await dataBase.getData();
    const { sonido } = await animales.find(e => e.name === animal)
    //console.log(sonido)
    return sonido;
}

export default getSonidoAnimal;
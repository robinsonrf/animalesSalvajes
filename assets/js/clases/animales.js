class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        //Declarar variables en modalidad Clousure
    let _nombre = nombre;
    let _edad = edad;
    let _img = img;
    let _comentarios = comentarios;
    let _sonido  = sonido;

    //generando gets
    this.getNombre = () => _nombre;
    this.getEdad = () => _edad;
    this.getImg = () => _img;
    this.getComentarios = () => _comentarios;
    this.getSonido = () => _sonido;

    //generando sets
    this.setComentarios = (comentarios) => (_comentarios = comentarios);
};

    //generando métodos get y set
    get Nombre(){
        return this.getNombre();
    }

    get Edad(){
        return this.getEdad();
    }

    get Img(){
        return this.getImg();
    }

    get Comentarios(){
        return this.getComentarios();
    }

    get Sonido(){
        return this.getSonido();
    }

    set Comentarios(comentarios){
        this.getComentarios(comentarios);
    }
};

export default Animal;
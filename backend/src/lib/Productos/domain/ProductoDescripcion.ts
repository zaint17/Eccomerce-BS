// Archivo para validar el nombre que 

export class ProductoDescripcion{
    private readonly value:string


    constructor(value:string){
        this.value = value
        this.validar()
    }

    private validar(){

        if(!this.value){
            throw new Error("La descripcion del producto no puede estar vacía")
        }

        if(this.value.length < 3){
            throw new Error("Debe tener al menos 3 caracteres")
        }

        if(this.value.length > 255){
            throw new Error("La descripcion no puede sobrepasar los 255 caracteres")
        }

        if (!/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(this.value)) {
            throw new Error("Debe contener letras válidas");
        }
    }
}
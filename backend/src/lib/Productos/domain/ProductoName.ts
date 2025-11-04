// Archivo para validar el nombre que 

export class ProductoNombre{
    value:string


    constructor(value:string){
        this.value = value
        this.validar()
    }

    private validar(){
        if(this.value.length<3){
            throw new Error("El nombre del producto tiene menos de 3 caracteres")
        }
    }
}
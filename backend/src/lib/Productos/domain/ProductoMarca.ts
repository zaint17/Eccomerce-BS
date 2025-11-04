export class ProductoMarca{
    value:string

    constructor(value:string){
        this.value = value
        this.validar()
    }

    private validar(){
        if(this.value.length<3){
            throw new Error("La marca no puede tener menos de 3 caracteres")
        }
    }
}
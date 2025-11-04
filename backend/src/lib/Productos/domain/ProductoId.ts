export class ProductoId{
    value: string;

    constructor(value:string){
        this.value = value;
        this.validar()
    }

    private validar(){
        if (this.value.length<10){
            throw new Error ("Id de Producto menor a 10 digitos")
        }
    }
}
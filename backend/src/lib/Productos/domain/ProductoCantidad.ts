export class ProductoCantidad{
    value:number

    constructor(value:number){
        this.value = value
        this.validar()
    }

    private validar(){
    if (this.value == null || isNaN(this.value)) {
      throw new Error('La cantidad del producto no puede ser nulo o no numérico.');
    }

    if (this.value < 0) {
      throw new Error('La cantidad no puede ser negativo.');
    }
    }
}
export class ProductoPrecio{
    value:number

    constructor(value:number){
        this.value = value
        this.validar()
    }

    private validar(){
    if (this.value == null || isNaN(this.value)) {
      throw new Error('El precio no puede ser nulo o no numérico.');
    }

    if (this.value < 0) {
      throw new Error('El precio no puede ser negativo.');
    }
    }
}
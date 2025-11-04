//Archivo que sirve para validar un la fecha de naciemiento de User.ts

export class UserFecNac{
    value: Date;

    constructor(value:Date){
        this.value = value;
        this.validar()
    }

    private validar(){
        if (this.value > new Date()){
            throw new Error ("La fecha es incorrecta")
        }
    }
}
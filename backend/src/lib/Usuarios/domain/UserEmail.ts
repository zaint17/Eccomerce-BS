//Archivo que sirve para validar un email de User.ts

export class UserEmail{
    value: string;

    constructor(value:string){
        this.value = value;
        this.validar()
    }

    private validar(){
        if (!this.value.includes("@") || !this.value.includes(".")){
            throw new Error ("Este valor no es un correo valido")
        }
    }
}
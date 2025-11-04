//Archivo que sirve para validar el Id de User.ts

export class UserId{
    value: string;

    constructor(value:string){
        this.value = value;
        this.validar()
    }

    private validar(){
        if (this.value.length>10){
            throw new Error ("Id de Usuario menor a 10 digitos")
        }
    }
}
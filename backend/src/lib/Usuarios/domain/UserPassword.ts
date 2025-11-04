//Archivo que sirve para validar la contraseña de User.ts

export class UserPassword{
    value: string;

    constructor(value:string){
        this.value = value;
        this.validar()
    }

    private validar(){
        if (this.value.length>10){
            throw new Error ("Tu contraseña no cumple el criterio de seguridad")
        }
    }
}
// Archivo para validar el nombre que 

export class UserName{
    value:string


    constructor(value:string){
        this.value = value
        this.validar()
    }

    private validar(){
        if(this.value.length<3){
            throw new Error("El nombre de usuario tiene menos de 3 caracteres")
        }
    }
}
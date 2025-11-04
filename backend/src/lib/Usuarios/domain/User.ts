//Archivo para crear estructura de usuario//

import { UserEmail } from "./UserEmail"
import { UserFecNac } from "./UserFecNac"
import { UserId } from "./UserId"
import { UserName } from "./UserName"
import { UserPassword } from "./UserPassword"

export class User {
    id: UserId
    name: UserName
    email: UserEmail
    password:UserPassword
    fec_nac: UserFecNac

    constructor (id : UserId, name : UserName, email : UserEmail, password : UserPassword, fec_nac: UserFecNac){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.fec_nac = fec_nac
    }

    public datosCompletos (){
        return `${this.id} - ${this.name} - ${this.email}`
    }

    public toPlainObject(){
        return{
            id:this.id.value,
            name:this.name.value,
            email:this.email.value,
            password:this.password.value,
            fec_nac:this.fec_nac.value
        }
    }
}



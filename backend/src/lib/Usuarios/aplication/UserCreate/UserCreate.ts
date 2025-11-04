import { User } from "../../domain/User";
import { UserEmail } from "../../domain/UserEmail";
import { UserFecNac } from "../../domain/UserFecNac";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserPassword } from "../../domain/UserPassword";
import { UserRepository } from "../../domain/UserRepository";

export class UserCreate {

    constructor (private repository: UserRepository) {

       
    }
    async run (
        id: string,
        name: string,
        email: string,
        password: string,
        fec_nac: Date,
    ):Promise<void>{
        const user = new User (
            new UserId(id),
            new UserName(name),
            new UserEmail(email),
            new UserPassword(password),
            new UserFecNac(fec_nac),

        );return this.repository.create(user)
    }


}


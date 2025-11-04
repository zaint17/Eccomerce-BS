import { Repository } from "typeorm";
import { UserRepository } from "../../domain/UserRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { TypeOrmUserEntity } from "./TypeOrmUserEntity";
import { UserName } from "../../domain/UserName";
import { UserEmail } from "../../domain/UserEmail";
import { UserPassword } from "../../domain/UserPassword";
import { UserFecNac } from "../../domain/UserFecNac";


export class  TypeOrmUserRepository implements UserRepository{
    constructor (@InjectRepository(TypeOrmUserEntity)
    private readonly repository:Repository<TypeOrmUserEntity>){

    }
    
     
        private mapDomain(u: TypeOrmUserEntity){

            return new User(
                new UserId(u.id),
                new UserName(u.name),
                new UserEmail(u.email),
                new UserPassword(u.password),
                new UserFecNac(u.fec_nac),
            )
            
         
     }

     async getAll():Promise<User[]>{
        const Users = await this.repository.find();
        return Users.map((u)=>this.mapDomain(u))
         
     }

     async getOneById(id:UserId):Promise<User|null>{
        const user = await this.repository.findOne({
            where:{
                id:id.value,
            }
        });
        if(!user) return null;
        return this.mapDomain(user);
         
     }

     async edit(user: User): Promise<void> {
         await this.repository.update(user.id.value,{
            name:user.name.value,
            email:user.email.value,
            password:user.password.value,
            fec_nac:user.fec_nac.value,
         })
     }

     async create(user: User): Promise<void> {
         await this.repository.save({
            
            name:user.name.value,
            email:user.email.value,
            password:user.password.value,
            fec_nac:user.fec_nac.value,
         })
    }
    async delete(id: UserId): Promise<void> {
         await this.repository.delete(id.value);
    }

}
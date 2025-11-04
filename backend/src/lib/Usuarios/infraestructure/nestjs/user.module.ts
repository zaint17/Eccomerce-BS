import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmUserRepository } from '../TypeOrm/TypeOrmUserRepository';
import { UserGetAll } from '../../aplication/UserGetAll/UserGetAll';
import { UserGetOneById } from '../../aplication/UserGetOneById/UserGetOneById';
import { UserCreate } from '../../aplication/UserCreate/UserCreate';
import { UserEdit } from '../../aplication/UserEdit/UserEdit';
import { UserDelete } from '../../aplication/UserDelete/UserDelete';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmUserEntity } from '../TypeOrm/TypeOrmUserEntity';

@Module({
  imports:[TypeOrmModule.forFeature([TypeOrmUserEntity])],
  controllers: [UserController],
  providers:[
    {
      provide:'UserRepository',
      useClass:TypeOrmUserRepository
    },
    {
      provide:'UserGetAll',
      useFactory:(repository:TypeOrmUserRepository)=>new UserGetAll(repository),
      inject:['UserRepository']
    },
    {
      provide:'UserGetOneById',
      useFactory:(repository:TypeOrmUserRepository)=>new UserGetOneById(repository),
      inject:['UserRepository']
    },
    {
      provide:'UserCreate',
      useFactory:(repository:TypeOrmUserRepository)=>new UserCreate(repository),
      inject:['UserRepository']
    },
    {
      provide:'UserEdit',
      useFactory:(repository:TypeOrmUserRepository)=>new UserEdit(repository),
      inject:['UserRepository']
    },
    {
      provide:'UserDelete',
      useFactory:(repository:TypeOrmUserRepository)=>new UserDelete(repository),
      inject:['UserRepository']
    },
  ]
})
export class UserModule {}

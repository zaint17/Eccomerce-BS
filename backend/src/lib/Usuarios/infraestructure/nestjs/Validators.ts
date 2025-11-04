import { IsString,Length,IsEmail } from "class-validator"


export class Create{
    @IsString()
    id:string
    @IsString()
    name:string
    @IsString()
    password:string
    @IsEmail()
    email:string
    
}

export class FindOneParams{
    @IsString()
    @Length(1,255)
    id:string
}

export class Edit{

    @IsString()
    name:string
    @IsString()
    password:string
    @IsEmail()
    email:string
    
}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './lib/Usuarios/infraestructure/nestjs/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmUserEntity } from './lib/Usuarios/infraestructure/TypeOrm/TypeOrmUserEntity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:"postgresql://postgres.dalbwutkhppjsisoqceb:123456@aws-1-us-east-2.pooler.supabase.com:6543/postgres?pgbouncer=true",
      entities: [TypeOrmUserEntity],
      synchronize: true,
    }),
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

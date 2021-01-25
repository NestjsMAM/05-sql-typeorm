import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mamtrucha0121',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ProductsModule,
  ],
})
export class AppModule {}

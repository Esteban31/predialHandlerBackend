import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PredialsModule } from './predials/predials.module';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

// Entities
import { Predial } from './predials/predials.entity';
import { OwnersModule } from './owners/owners.module';
import { Owner } from './owners/owners.entity';
import { ConstructionsModule } from './constructions/constructions.module';
import { Construction } from './constructions/constructions.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'prueba',
      entities: [Predial, Owner, Construction],
      synchronize: true,
    }),
    PredialsModule,
    OwnersModule,
    ConstructionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

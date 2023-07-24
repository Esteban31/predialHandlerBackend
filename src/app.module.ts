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
import { TerrainsModule } from './terrains/terrains.module';
import { Terrain } from './terrains/terrains.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: process.env.TYPEORM_DB,
      entities: [Predial, Owner, Construction, Terrain],
      synchronize: true,
    }),
    PredialsModule,
    OwnersModule,
    ConstructionsModule,
    TerrainsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

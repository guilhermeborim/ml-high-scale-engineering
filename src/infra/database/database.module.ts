import { Module } from '@nestjs/common';
import { ConfigModule, type ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from '../config/database.config.js';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      inject: [databaseConfig.KEY],
      useFactory: (db: ConfigType<typeof databaseConfig>) => ({
        type: 'mysql' as const,
        uuidExtension: 'pgcrypto' as const,
        ...db,
        autoLoadEntities: true,
        synchronize: false,
        migrationsRun: true,
        migrations: [`${import.meta.dirname}/migrations/*.{js,ts}`],
        entities: [`${import.meta.dirname}/entities/*.{js,ts}`],
      }),
    }),
  ],
})
export class DatabaseModule {}

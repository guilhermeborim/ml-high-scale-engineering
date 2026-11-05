import 'dotenv/config';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: Number(process.env.DATABASE_PORT ?? 8080),
  username: process.env.DATABASE_USER ?? 'root',
  password: process.env.MYSQL_ROOT_PASSWORD ?? 'root',
  database: process.env.DATABASE_NAME ?? 'root',
  synchronize: false,
  entities: [`${import.meta.dirname}/../../**/*.entity.{js,ts}`],
  migrations: [`${import.meta.dirname}/migrations/*.{js,ts}`],
});

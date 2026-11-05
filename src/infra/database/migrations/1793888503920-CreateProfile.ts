import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProfile1793888503920 implements MigrationInterface {
    name = 'CreateProfile1793888503920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`profile\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`cpf\` varchar(255) NULL, \`cnpj\` varchar(255) NULL, UNIQUE INDEX \`IDX_3825121222d5c17741373d8ad1\` (\`email\`), UNIQUE INDEX \`IDX_076db4b6e428a66ccb957c566b\` (\`cpf\`), UNIQUE INDEX \`IDX_b0601d7797537d1f21117f66ab\` (\`cnpj\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b0601d7797537d1f21117f66ab\` ON \`profile\``);
        await queryRunner.query(`DROP INDEX \`IDX_076db4b6e428a66ccb957c566b\` ON \`profile\``);
        await queryRunner.query(`DROP INDEX \`IDX_3825121222d5c17741373d8ad1\` ON \`profile\``);
        await queryRunner.query(`DROP TABLE \`profile\``);
    }

}

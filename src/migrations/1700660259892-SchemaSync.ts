import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync1700660259892 implements MigrationInterface {
    name = 'SchemaSync1700660259892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "description" TO "sentence"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "sentence" TO "description"`);
    }

}

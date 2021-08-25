import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProductsTable1629478777020 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "price",
                        type: "double precision"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products")
    }

}
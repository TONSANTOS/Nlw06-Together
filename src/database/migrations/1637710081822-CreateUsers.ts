import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1637710081822 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( // Criação de tabela
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true // id primario
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false // Se eu não passar alguma informção para ela, eu quero que eu meu admin seja salvo como falso (a maioria dos users não serão admin)
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()" // Vai pegar na hora que o nosso objeto for criado
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users") // Removendo a tabela
    }

}

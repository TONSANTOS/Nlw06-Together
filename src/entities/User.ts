import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users") // Definido nome da tabela, entidade referência a tabela de usuario
class User {
    @PrimaryColumn()
    readonly id: string; // id só de leitura, a inserção dele não pode ser feita por outra classe. Quem vai fazer a inserção desse id vai ser a propria entidade.

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    /**
     * Toda vez que new "nome da classe" é criado esse 
     * construtor é instânciado. Quando um novo usuário for 
     * criado (new user) eu quero que alguma alteração seja feita dentro do constructor.
     */
    constructor() { // Pra acessar os atributos de uma classe é necessário uma o .this

        if(!this.id) { // Se for diferente de this.id, se o id vier como nulo/undefined eu vou criar um novo valor pra esse this.id
            this.id = uuid()
        } 

    }
}

export { User }

// Entidade < - > ORM <- > BD (users)

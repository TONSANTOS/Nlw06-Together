// CRIAÇÃO DE REPOSITÓRIO. PEGAR A ENTIDADE E FAZER CONEXÃO COM O BANCO DE DADOS
import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UsersRepositories extends Repository<User> { }

export { UsersRepositories }
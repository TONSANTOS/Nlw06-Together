import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService {
    async execute({ name, email, admin}: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email) { // Verificando se o email está preenchido
            throw new Error("Email incorrect") // throw new lança um exerção
        }

        const userAlreadyExists = await usersRepository.findOne({ // Pesquisando pelo email se ja existe o usuário
            email,
        });

        if(userAlreadyExists) {
            throw new Error("User already exists")
        }

        const user = usersRepository.create({ // Se estiver tudo certo, crio a instância e salvo o objeto no meu DB
            name,
            email,
            admin
        })

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }
import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';



class CreateTagService {

    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Incorrect name!")
        }


        // Select * form where name = "name"
        const tagAreadyExists = await tagsRepositories.findOne({ // findeOne vai acessar o banco de dados e buscar a tag onde o nome for = name
            name
        });

        if(tagAreadyExists) {
            throw new Error("Tag already exists!");
        }

        const tag = tagsRepositories.create({
            name,
        });

        await tagsRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService }
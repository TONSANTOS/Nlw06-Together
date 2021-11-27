import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {
    async handle(request: Request, response: Response) {
        const { name } = request.body // Fazendo desestruturação e pegando direto pelo nome do parâmetro qie está vindo
        const createTagService = new CreateTagService();

        const tag = await createTagService.execute(name);

        return response.json(tag);
    }
}

export { CreateTagController }
const CategoryRepository = require("../repositories/CategoryRepository");

class CategoryController {
    async index(request, response) {
        const { orderBy } = request.query;
        const categories = await CategoryRepository.findAll(orderBy);
        response.json(categories);
    }
    async store(request, response) {
        const { name } = request.body;

        if (!name) {
            return response.status(400).json({ error: "Name is required" });
        }

        const category = await CategoryRepository.create({ name });
        response.json(category);
    }
    async show(request, response) {
        // obter registro
        const { id } = request.params;
        const category = await CategoryRepository.findById(id);

        if (!category) {
            return response.status(404).json({ error: "Category not found" });
        }

        response.json(category);
    }
    async update(request, response) {
        // atualizar registro
        const { id } = request.params;
        const { name } = request.body;

        const categoryExists = await CategoryRepository.findById(id);

        if (!categoryExists) {
            return response.status(404).json({ error: "Category not found" });
        }
        if (!name) {
            return response.status(400).json({ error: "Name is required" });
        }
        const categoryByName = await CategoryRepository.findByName(name);

        if (categoryByName && categoryByName.id !== id) {
            return response
                .status(400)
                .json({ error: "This category is already registed" });
        }

        const category = await CategoryRepository.update(id, {
            name,
        });

        response.json(category);
    }
    async delete(request, response) {
        // deletar registro
        const { id } = request.params;

        await CategoryRepository.delete(id);
        response.sendStatus(204);
    }
}

module.exports = new CategoryController();

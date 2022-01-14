const {Categorie} = require('../models')

class CategorieController {
    async create(req, res) {
        const {name} = req.body
        const category = Categorie.create({name})
        return res.json(cat)
    }

    async getAll(req, res) {
        const category
    }
}

module.exports = new CategorieController()
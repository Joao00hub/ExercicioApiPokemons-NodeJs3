const { Pokemon } = require('../models/');
const { Op } = require("sequelize");


class PokemonController {

    async getAll(req, res) {
        try {
            const pokemons = await Pokemon.findAll();
            return res.status(200).json(pokemons);
        }   

        catch(e) {
            return res.status(400).json({error: e.message});
        }
    }

    async getPK(req, res) {
        try {
            const pokemon = await Pokemon.findByPk(req.params.id);
            return res.status(200).json(pokemon);
        }   

        catch(e) {
            return res.status(400).json({error: e.message});
        }
    }

    async getAllByName(req, res) {
        try {
            let nome = '%' + req.query.nome + '%';
            const pokemons = await Pokemon.findAll({
                where: {
                    nome: {
                        [Op.like]: nome
                    }
                }
            });
            return res.status(200).json(pokemons);
        }   

        catch(e) {
            return res.status(400).json({error: e.message});
        }
    }

    async insert(req, res) {

        try {
            const pokemon = await Pokemon.create(req.body);
            return res.status(200).json(pokemon);

        }

        catch(e) {
            return res.status(400).json({error: e.message});
        }       

    }

    async update(req, res) {
        try { 
            const pokemon = await Pokemon.findByPk(req.params.id);
            if(pokemon) {
                await Pokemon.update(req.body);
                return res.status(200).json(Pokemon)
            }
            else{
            return res.status(400).json({mensagem: "Pokemon não encontrado"})
            }
        }
        catch(e) {
            return res.status(400).json({error: e.message});
        }
    }

    async delete(req, res) {
        try { 
            const pokemon = await Pokemon.findByPk(req.params.id);
            if(pokemon) {
                await Pokemon.destroy();
                return res.status(200).json(Pokemon)
            }
            else{
            return res.status(400).json({mensagem: "Pokemon não encontrado"})
            }
        }
        catch(e) {
            return res.status(400).json({error: e.message});
        }
    }
    
}

module.exports = new PokemonController();
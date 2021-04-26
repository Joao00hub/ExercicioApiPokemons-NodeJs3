const { Treinador } = require('../models/');
const { Op } = require("sequelize");

class TreinadorController {
    async get(req, res) {
        try {

        }
        catch(e) {

        }    
    }

    async getAll(req, res) {
        try{
            const treinadores = await Treinador.findAll();
            return res.status(200).json(treinadores);
        }
        catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async getPK(req, res) {
        try{
            const treinador = await Treinador.findByPk(req.params.id);
            return res.status(200).json(treinador);
        }
        catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async getAllByName(req, res) {
        try {
            let nome = '%' + req.query.nome + '%';
            const treinadores = await Treinador.findAll({
                where: {
                    nome: {
                        [Op.like]: nome
                    }
                }
            });
            return res.status(200).json(treinadores);
        }   

        catch(e) {
            return res.status(400).json({error: e.message});
        }
    }

    async insert(req, res) {
        try { 
            const treinador = await Treinador.create(req.body);
            return res.status(200).json(treinador)
        }
        catch(e) {
            return res.status(400).json({error: e.message});
        }
    }

    async update(req, res) {
        try { 
            const treinador = await Treinador.findByPk(req.params.id);
            if(treinador) {
                await Treinador.update(req.body);
                return res.status(200).json(Treinador)
            }
            else{
            return res.status(400).json({mensagem: "Treinador não encontrado"})
            }
        }
        catch(e) {
            return res.status(400).json({error: e.message});
        }
    }

    async delete(req, res) {
        try { 
            const treinador = await Treinador.findByPk(req.params.id);
            if(treinador) {
                await Treinador.destroy();
                return res.status(200).json(Treinador)
            }
            else{
            return res.status(400).json({mensagem: "Treinador não encontrado"})
            }
        }
        catch(e) {
            return res.status(400).json({error: e.message});
        }
    }
}

module.exports = new TreinadorController();
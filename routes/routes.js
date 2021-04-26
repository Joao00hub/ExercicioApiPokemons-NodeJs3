const { Router } = require('express');
const PokemonController = require('../controllers/PokemonController'); 
const TreinadorController = require('../controllers/TreinadorController')
const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).json({mensagem: "Temos que pegar!"})
}); 

//Pokemons Rotas
routes.get('/pokemons', PokemonController.getAll);
routes.get('/pokemon/:id', PokemonController.getPK);
routes.get('/pokemons/nome', PokemonController. getAllByName);
routes.post('/pokemon', PokemonController.insert);
routes.put('/pokemon/:id', PokemonController.update);
routes.delete('pokemon/:id', PokemonController.delete);


//Treinadores Rotas
routes.get('/treinadores', TreinadorController.getAll);
routes.get('/treinador/:id', TreinadorController.getPK);
routes.get('/treinadores/nome', TreinadorController.getAllByName);
routes.post('/treinador', TreinadorController.insert);
routes.put('/treinador/:id', PokemonController.update);
routes.delete('treinador/:id', PokemonController.delete);

module.exports = routes;
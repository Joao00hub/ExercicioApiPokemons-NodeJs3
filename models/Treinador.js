module.exports = (sequelize, Sequelize) => {
    const Treinador = sequelize.define("Treinador", {
        nome: Sequelize.STRING,
        idade: Sequelize.STRING,
        level: Sequelize.STRING,
        pokemon_preferido: Sequelize.STRING,
    })
    return Treinador;
}
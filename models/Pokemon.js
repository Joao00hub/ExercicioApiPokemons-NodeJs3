module.exports = (sequelize, Sequelize) => {
    const Pokemon = sequelize.define("Pokemon", {
        numero: Sequelize.STRING,
        nome: Sequelize.STRING,
        tipo: Sequelize.STRING,
        geracao: Sequelize.STRING,
    });
    return Pokemon
}
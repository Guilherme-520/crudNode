const db = require("./banco")

const Agendamento = db.sequelize.define("agendamentos", {
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.INTEGER
    },
    origem:{
        type: db.Sequelize.STRING
    },
    dataC:{
        type: db.Sequelize.DATE
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
})

//Agendamento.sync({force: true})

module.exports = Agendamento
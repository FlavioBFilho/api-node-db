const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "host_name",
    user: "user_name",
    password: "password",
    database: "exemplo_db"
});

connection.connect((err) => {
    if(err) {
        console.error("Erro ao conectar ao banco de dados: ", err);
    } else {
        console.log("Conectado ao banco de dados MYSQL com sucesso");
    }
});

module.exports = connection;
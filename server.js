const express = require("express");
const app = express();
const usuariosRoutes = require("./routes/usuarios");
const PORT = 3000;

app.use(express.json());

app.use("/usuarios", usuariosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
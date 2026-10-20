const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
    res.status(200).send("pong");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`API funcionando en puerto ${PORT}`);
});
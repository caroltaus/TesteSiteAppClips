const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello Toti");
});

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});
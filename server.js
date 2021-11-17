const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "front-end/DASHBOARD", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front-end/DASHBOARD","home.html"));
})

app.listen(8080, () => console.log("Server listening on 8080..."));
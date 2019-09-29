"use-strict"
const express = require("express"); 
const app = express(); 
// const chips = require("./chips.api");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
// app.use("/api", chips);

const port = 3000;

app.listen(port, () => console.log(`Server is running on PORT ${port}`));

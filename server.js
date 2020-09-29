const express = require("express");
const { Sequelize } = require("sequelize");
const path = require('path')
const PORT = 3000;

const db = new Sequelize("To_Do_List", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
});

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join('./pages/main_page.html'));
});

async function start() {
    try {
      db.authenticate()
        .then(() => console.log("Database conected..."))
        .catch((err) => console.log("Err: " + err));
      app.listen(PORT, () => {
        console.log("Server has been started...");
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  start();
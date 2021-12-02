const path = require('path');
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./assets/config/connection");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
  helpers: {
    isStarWars: function(value) {
      if (value === 1) {
        return true;
      }
    }
  }
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'assets')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
const path = require('path');
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./assets/config/connection");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
  helpers: {
    each_upto: function(array, max, options) {
      var result = [ ];
      for(var i = 0; i < max && i < array.length; ++i)
          result.push(options.fn(array[i]));
      return result.join('');
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
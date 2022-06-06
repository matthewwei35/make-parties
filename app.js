// Initialize express
const express = require('express')
const app = express()

// require handlebars
app.use(express.static('public'));

// Middleware
const { engine } = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

// Tell our app to send the "hello world" message to our home page
app.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are Cool!' });
})

// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})

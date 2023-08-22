const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const path = require('path')
const handlebars = require('express-handlebars');


app.use(express.static(path.join(__dirname, 'public')))

//http logger
app.use(morgan('combined'))

//Templete engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


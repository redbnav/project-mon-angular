const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
    // res.send('<h1>Hello  !!!!</h1>')
    res.send({
        name: 'Naveen',
        likes: [
            'Big data',
            'Food'
        ]
    });
});
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
});
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'unable to find requested page'
    });
});
app.listen(3000, () => {
    console.log('Server is up at port 3000')
});
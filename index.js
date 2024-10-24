const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'PBS - Dashboard'
    })
});

app.get('/pages/order', (req, res) => {
    res.render('order', {
        title: 'PBS - Order Item',
        item_type: req.query.item_type
    });
})

app.get('/pages/cart', (req, res) => {
    res.render('cart', {
        title: 'PBS - Cart'
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
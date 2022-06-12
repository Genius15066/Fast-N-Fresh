const express = require('express')
const cors = require('cors')
const ObjectID = require('mongodb').ObjectID
require('dotenv').config()
const app = express()
const port = 8080


const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.0vdbt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
app.use(express.json())
app.use(cors())

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log(err)
    const productCollection = client.db("eshopdb").collection("products");
    const orderCollection = client.db("eshopdb").collection("orders");

    app.get('/products', (req, res) => {
        productCollection.find()
            .toArray((err, items) => {
                res.send(items)
            })
    })

    app.get('/', (req, res) => {
        res.send('hello heroku')
    })

    app.get('/order', (req, res) => {
        orderCollection.find({ email: req.query.email })
            .toArray((err, items) => {
                res.send(items)
            })
    })

    app.get('/products/:id', (req, res) => {
        productCollection.find({ _id: ObjectID(req.params.id) })
            .toArray((err, document) => {
                res.send(document[0]);
            })
    })

    app.post('/addProduct', (req, res) => {
        const newProduct = req.body;
        productCollection.insertOne(newProduct)
            .then(result => {
                res.send(result.insertedCount > 0)
            })

    })

    app.post('/addorder', (req, res) => {
        const productOrder = req.body;
        orderCollection.insertOne(productOrder)
            .then(result => {
                res.send(result.insertedCount > 0)
            })

    })

    app.delete('/deleteProduct/:id', (req, res) => {
        const id = ObjectID(req.params.id);
        productCollection.findOneAndDelete({ _id: id })
            .then(documents => res.send(!!documents.value))
    })

});

app.listen(process.env.PORT || port)
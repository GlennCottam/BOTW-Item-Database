const express       = require('express');
const app           = express();
const morgan        = require('morgan');
const mongodb       = require('mongodb').MongoClient;
const bodyPar       = require('body-parser');
const cors          = require('cors');
const config        = require('./config');


const port = process.env.PORT || 8082;

app.use(bodyPar.urlencoded({extended: false}));
app.use(bodyPar.json());

app.use(morgan('dev'));
app.use(cors());

app.get('/check', function(req, res)
{
    res.json({status: true});
});

// ===============================
// Item | Price | Village | Area
// ===============================

app.get('/data', function(req, res)
{
    mongodb.connect(config.database, function(err, db)
    {
        if (err) throw err;
        var dbo = db.db('BOTW-Sales');
        dbo.collection('items').find({}).toArray(function(err, result)
        {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});

app.post('/insert', function(req, res)
{
    // Values:
    // Village
    // Store
    // Item
    // Price

    mongodb.connect(config.database, function(err, db)
    {
        if(err) throw err;
        
        var dbo = db.db('BOTW-Sales');
        var newEntry = {village: req.body.village, store: req.body.store, item: req.body.item, price: req.body.price};
        dbo.collection('items').insertOne(newEntry, function(err, res)
        {
            if(err) throw err;
            console.log("Entry Created");
            db.close();
        })
    });
});


app.listen(port);
console.log("Server ready at: devin.mackwnox.ca:" + port);
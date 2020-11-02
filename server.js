const express = require('express'); // how we import in node
const app = express();
const port = process.env.PORT||3002;

app.get('/', (req, res) => {
    console.log(new Date());
    res.json([
        {
            name: 'earth'
        },
        {
            name: 'moon'
        }
    ]);
});

app.get('/drinks', (req, res) => {
    const drinks = [
        {
            name: 'vodka'
        }, 
        {
            name: 'gin'
        }, 
        {
            name: 'absinthe'
        }
    ];

    res.json(drinks);    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

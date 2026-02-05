const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    console.log('Testul suprem a fost atins cu succes!');
    res.send('Hello World ce zici ce faci ce sugi!');

});



app.listen(port, ()=>{
    console.log(`Serverul rulează la http://localhost:${port}`);
});
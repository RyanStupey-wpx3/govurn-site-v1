const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );

const port = 3535;

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(port, () => {console.log(`app is listening on port ${port}`)})
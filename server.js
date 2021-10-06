// Setup empty JS object to act as endPoint for all routes
let projectData = {};

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('website'));

const port = 3000;
app.listen(port, () => {console.log(`Runing on port: ${port}`)});

let i = 1;
app.post('/dataFromClient', postM);

function postM(req, res) {
   let newData = {
      temperature: req.body.temperature,
      date: req.body.date,
      userResponse: req.body.userResponse
   };
   projectData.hasOwnProperty(`data${i}`) ? i++ : i;
   projectData[`data${i}`] = newData;
   i++;

   res.send(newData);
   // console.log(newData);
}

app.get('/allData', (req,res) => {
   res.send(projectData);
   console.log(projectData);
}); 

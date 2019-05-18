const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  console.log('new request..')
  const color = req.query.hex;

  const request = {
    method: 'get',
    url: `http://thecolorapi.com/id?hex=${color}&format=json`,
  };

  axios(request)
    .then(response => {
      console.log(response.data.name);
      res.status(200).send(response.data.name.value).end();
    })
    .catch(error => res.status(500).send(error).end());

})

app.listen(3001);
console.log('listening to port 3001..');

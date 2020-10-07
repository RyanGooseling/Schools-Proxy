const express = require('express')
const path = require('path');
const axios = require('axios');

const app = express();
app.use('/homes/:id', express.static(path.join(__dirname, 'public')));

app.use('/homes/:id', (req, res) => {
  axios.get(`http://localhost:3002/homes/${req.params.id}/schools`)
    .then((schools) => {
      res.json(schools.data);
    })
    .catch((err) => {
      console.log('Error in controller GET');
      console.error(err);
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});


// Create a React component
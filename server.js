const express = require('express')
const path = require('path');
const axios = require('axios');

const app = express();
app.use('/homes/:id', express.static(path.join(__dirname, 'public')));

app.get('/homes/:id/schools', (req, res) => {
  axios.get(`http://localhost:3002/homes/${req.params.id}/schools`)
    .then((schools) => {
      res.json(schools.data);
    })
    .catch((err) => {
      console.log('Error in schools GET');
      console.error(err);
    });
});

app.get('/data/homes/:id', (req, res) => {
  axios.get(`http://localhost:3001/data/homes/${req.params.id}`)
    .then((similarHomes) => {
      res.send(similarHomes.data);
    })
    .catch((err) => {
      console.log('Error in similiar homes GET');
      console.error(err);
    });
});

app.get('/homes/:id/schedule', (req, res) => {
  axios.get(`http://54.193.202.190:3004/homes/${req.params.id}/schedule`)
    .then((schedule) => {
      res.send(schedule.data);
    })
    .catch((err) => {
      console.log('Error in similiar homes GET');
      console.error(err);
    });
});

app.post('/homes/:id/schedule', (req, res) => {
  axios.post(`http://54.193.202.190:3004/homes/${req.params.id}/schedule`)
    .then((newBooking) => {
      res.send(newBooking.data);
    })
    .catch((err) => {
      console.log('Error in similiar homes GET');
      console.error(err);
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});


// Create a React component
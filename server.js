const express = require('express');
const request = require('request');
const app = express();
const port = 1000;
const axios = require('axios');
const pug = require('pug')


// Middleware to parse JSON data
app.use(express.json());

// Options object for API request
const options = {
  url: 'https://hotels4.p.rapidapi.com/v2/get-meta-data',
  headers: {
    'X-RapidAPI-Key': '59ae582c20msh93932353e5439cfp1f3c02jsn05d26ec8b79d',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  }
};

// Using async/await syntax
app.get('/async', async (req, res) => {
  try {
    const response = await axios.request(options);
    const hotels = response.data.result;
    res.render('server', { hotels });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

// Using Promises
app.get('/promise', (req, res) => {
  axios.request(options)
    .then(response => {
      const hotels = response.data.result;
      res.render('server', { hotels });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
});

// Using callbacks
app.get('/callback', (req, res) => {
  request(options, (error, response, body) => {
    if (error) {
      console.error(error);
      return res.status(500).send('An error occurred');
    }

    console.log(body);
    res.send(body);
  });
});

// Route for rendering the form
app.get('/', (req, res) => {
    res.render('form');
  });
  
  // Route for handling form submission
  app.post('/', (req, res) => {
    const searchQuery = req.body.searchQuery;
    // code to handle the search query goes here
  });
  

  
 // Start the server
app.listen(port, () => {
  console.log(`Server started on port ${1000}`);
});  




/* // creating first route - http://localhost:1000
app.get('/', (req, res)=>{
    res.send("Welcome to Misha's Home Page")
})

// second route - http://localhost:1000/dashboard
app.get('/dashbaord', (req, res)=>{
    res.send("Welcome to Misha's Dashbaord Page")
})

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${1000}`);
}); */



  
  
  
/* 
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/v2/get-meta-data',
  headers: {
    'X-RapidAPI-Key': '59ae582c20msh93932353e5439cfp1f3c02jsn05d26ec8b79d',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  }
};

async function getHotelsMetaData() {
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

app.get('/callback', (req, res) => {
    const options = {
      url: 'https://hotels4.p.rapidapi.com/v2/get-meta-data',
      headers: {
        'X-RapidAPI-Key': '59ae582c20msh93932353e5439cfp1f3c02jsn05d26ec8b79d',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };
  
    request(options, (error, response, body) => {
      if (error) {
        console.error(error);
        return res.status(500).send('An error occurred');
      }
  
      console.log(body);
      res.send(body);
    });
  }); */
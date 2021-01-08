const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors())

// Use JSON middleware
app.use(express.json());

const PORT = 5000;

// Mock up database as JS object
const db = {
  "names": [
    {
      "name": "Ville",
      "amount": 24
    },
    {
      "name": "Anna",
      "amount": 6
    },
    {
      "name": "Antti",
      "amount": 22
    },
    {
      "name": "Sanna",
      "amount": 5
    },
    {
      "name": "Mikko",
      "amount": 19
    },
    {
      "name": "Minna",
      "amount": 5
    },
    {
      "name": "Timo",
      "amount": 18
    },
    {
      "name": "Satu",
      "amount": 5
    },
    {
      "name": "Tuomas",
      "amount": 16
    },
    {
      "name": "Tiina",
      "amount": 5
    },
    {
      "name": "Tero",
      "amount": 15
    },
    {
      "name": "Kati",
      "amount": 5
    },
    {
      "name": "Sami",
      "amount": 15
    },
    {
      "name": "Henna",
      "amount": 4
    },
    {
      "name": "Mika",
      "amount": 12
    },
    {
      "name": "Liisa",
      "amount": 4
    },
    {
      "name": "Janne",
      "amount": 12
    },
    {
      "name": "Paula",
      "amount": 4
    },
    {
      "name": "Petri",
      "amount": 11
    },
    {
      "name": "Suvi",
      "amount": 4
    }
  ]
};

// @route   GET /names
// @desc    Get most popular names and their amounts.
//          sort query parameter can be used to change how the array is sorted (options: popularity, alphabetical).
//          count query parameter can be used to get the count of returned names (options: total).
// @access  Public
app.get('/names', (req, res) => {
  // Sort based on amount of names (popularity, descending)
  if (req.query.sort === 'popularity') {
    return res.status(200).json(db.names.sort((a, b) => b.amount - a.amount));
  }

  // Sort alphabetically (a to ö)
  if (req.query.sort === 'alphabetical') {
    return res.status(200).json(db.names.sort((a, b) => a.name.localeCompare(b.name)));
  }

  // Calculate total amount of names
  if (req.query.count === 'total') {
    let total = 0;
    db.names.forEach(item => total = total + item.amount);
    return res.status(200).json({"total": total});
  }
  return res.status(200).json(db.names);
})

// @route   GET /names/:name
// @desc    Get the name and amount of a specific name, returned inside an array for front-end
// @access  Public
app.get('/names/:name', (req, res) => {
  let match = db.names.find((item, index) => item.name.toLowerCase() === req.params.name.toLowerCase());
  let arrayWrapperMatch = [match];
  return (match ? res.status(200).json(arrayWrapperMatch) : res.status(404).json({"name": "Not Found"}));
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
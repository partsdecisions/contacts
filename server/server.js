const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const dbService = require('./dbService');

// Initialising 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// Checking server state
app.listen(process.env.PORT, () => {
    console.log(`Server started successfuly`);
});

// Get All Data
app.get('/getContacts', (req, res) => {
    const db = dbService.getDbServiceInstance();
    const results = db.getAllData();
    results
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

// Add Contact
app.post('/addContact', (req, res) => {
    const { name, address, number } = req.body;
    const db = dbService.getDbServiceInstance();
    const results = db.addContact(name, address, number)
    results
    .then(data => res.json({data : data}))
    .catch(err => console.log(err));
});

// Delete Contact
app.delete('/deleteContact/:id', (req, res) => {
    const { id } = req.params;
    const db = dbService.getDbServiceInstance();
    const results = db.deleteContact(id)
    results
    .then(data => res.json({success: data}))
    .catch(err => console.log(err));
})

// Update Contact
app.patch('/updateContact/:id', (req, res) => {
    const { id } = req.params;
    const { name, address, number } = req.body;
    const db = dbService.getDbServiceInstance();
    const results = db.updateContact(id, name, address, number);
    results
    .then(data => res.json({data: data}))
    .catch(err => console.log(err));
})



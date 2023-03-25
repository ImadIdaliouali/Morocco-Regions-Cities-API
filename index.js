const express = require('express');
const Joi = require('joi');
const app = express();

const regions = require('./json/regions.json');
const cities = require('./json/cities.json');

app.get('/', (req, res) => {
    res.send('Morocco Regions and Cities');
});

app.get('/regions', (req, res) => {
    res.send(regions);
});

function validateId(params) {
    const schema = Joi.object({
        id: Joi.number(),
    });
    return schema.validate(params);
}

app.get('/regions/:id', (req, res) => {
    const { error } = validateId(req.params);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const id = parseInt(req.params.id);
    const filteredRegion = regions.find(r => r.id === id);
    if (!filteredRegion) {
        return res.status(404).send('There is no region with the given ID');
    }
    res.send(filteredRegion);
});

app.get('/regions/:id/cities', (req, res) => {
    const { error } = validateId(req.params);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const id = parseInt(req.params.id);
    const filteredCities = cities.filter(c => c.region === id);
    if (!filteredCities.length) {
        return res.status(404).send('There are no cities with the given ID');
    }
    res.send(filteredCities);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
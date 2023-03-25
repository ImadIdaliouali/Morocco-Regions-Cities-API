# Morocco Regions and Cities API

> Requirement

- NodeJS
- Express
- Nodemon
- Joi

> How To Setup the API

1. clone repository
2. cd to project
3. `npm i -g nodemon`
4. `npm install`
5. `nodemon index.js`

> How to use

| URL | Response |
| ----------- | ----------- |
| http://localhost:3000/regions | array of regions |
| http://localhost:3000/regions/{regionID} | information about a region with a specific regionID |
| http://localhost:3000/regions/{regionID}/cities | array of cities that have the same regionID |
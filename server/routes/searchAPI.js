const express = require('express');
const app = express();
const fetch = require('node-fetch');

module.exports = (app) => {

    const listAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='

    let search;

    app.post('/search', (req, res) => {

        search = req.body.query //query is name property in form 
        console.log(search)

        if (search.length === 0) {
            res.redirect('http://localhost:3000/errorNone');
        } else {
            res.redirect(`http://localhost:3000/searched/${search}`);
        }
    });

    app.get('/ingredient-search', (req, res) => {

        fetch(`${listAPI}` + search)
            .then(res => res.json())
            .then(data => {
                res.send({ data });
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            });
    })
}
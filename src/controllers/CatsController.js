const {Router} = require('express');
const axios = require('axios');
const {config} = require('../config/config');

class CatsController {
    getCats = (req, res) => {
      axios.get(config.apiUrl + 'breeds', {
        headers: {
          "x-api-key": config.apiKey,
          "Pagination-Count": "1",
        },
      })
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    findCatByName = (req, res) => {
      axios.get(config.apiUrl + 'breeds/search?q=' + req.params.catname, {
        headers: {
          "x-api-key": config.apiKey,
        },
      }).then((response) => {
        res.json(response.data);
      }).catch((error) => {
        console.log(error);
      })
    }

    getImageSingleCat = (req, res) => {
      axios.get(config.apiUrl + 'images/' + req.params.id, {
        headers: {
          "x-api-key": config.apiKey,
        },
      }).then((response) => {
        res.json(response.data);
      }).catch((error) => {
        console.log(error);
      })
    }
    getImagesOther = (req, res) => {
      axios.get(
        config.apiUrl + 'images' +
        '/search?breed_id=' + req.params.id +
        '&format=json&limit=8&order=RANDOM&page=2&size=full',
        {
        headers: {
          "x-api-key": config.apiKey,
        },
      }).then((response) => {
        res.json(response.data);
      }).catch((error) => {
        console.log(error);
      })
    }
}

module.exports = CatsController;

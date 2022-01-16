const {Router} = require('express');
const CatsController = require('../controllers/CatsController');

/* GET users listing. */
class catwikiRouter {
  constructor() {
    this.router = Router();
    this.#config();
  }

  #config() {
    const objCatController = new CatsController();
    this.router.get('/',  objCatController.getCats);
    this.router.get('/:catname', objCatController.findCatByName);
    this.router.get('/images/catPhoto/:id', objCatController.getImageSingleCat);
    this.router.get('/images/:id', objCatController.getImagesOther);
  }
}


module.exports = catwikiRouter;

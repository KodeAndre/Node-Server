import express from 'express';
const router = express.Router();

const helloWorld = require('./endpoints/helloWorld.json');
const plants = require('./endpoints/plants.json');
const cars = require('./endpoints/cars.json');

router.get('/helloWorld', ((req: any, res: any) => {
  res.json(helloWorld);
}));

router.get('/plants', ((req: any, res: any) => {
  res.json(plants);
}));

router.get('/cars', ((req: any, res: any) => {
  res.json(cars);
}));

module.exports = router;
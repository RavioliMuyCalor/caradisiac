/*const {getBrands} = require('node-car-api');

async function sandbox () {
  const brands = await getBrands();

  console.log(brands);
}

sandbox();*/


/*const getModels = require('node-car-api/src/get-models');

async function sandbox () {
  const models = await getModels('AUDI');

  console.log(models);
}

sandbox();*/


const getRecords = require('node-car-api/src/get-records');

async function sandbox () {
  const records = await getRecords('AUDI');

  console.log(records);
}

sandbox();



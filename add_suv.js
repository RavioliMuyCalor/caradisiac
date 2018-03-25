
var pSettle = require('p-settle');
const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');


function insert_to_elasticsearch(model)
{

  model.forEach(function(elem){

   // console.log("\n"+ String(elem.brand).toLowerCase());
      client.index({  
      index: String(elem.brand).toLowerCase(),
      type: 'models',
      body: {
        "Brand": elem.brand,
        "Volume" : elem.volume,
        "Name" : elem.name
      }
    },function(err,resp,status) {
        console.log(resp);
  });
  })
  
}

async function add_all_suv(){

      //var brands = await getBrands();

      var all_models = [];
      var brands = ["RENAULT"];
      models = brands.map(brand => getModels(brand));
      pSettle(models).then(result => {
        let i = 0;
        result.forEach(function(elem){
             console.log(result);
          if(elem.isFulfilled)
          { 
            console.log(elem.value);
            insert_to_elasticsearch(elem.value);

          }
        })

       // console.log(JSON.stringify(all_models));
      console.log("\n Fin");

    })
}

module.exports = add_all_suv;



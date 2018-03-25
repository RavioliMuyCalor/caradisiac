var client = require('./connection.js');
var write_json = require('./write_json.js');

function search()
{
 client.search({  
    index: ['audi', 'renault'],
    type: 'models',
    //fielddata: true,
      body: {
        /* sort : [
          { 'Volume' : {'order' : 'desc'}}
         ],*/
         query: {match_all: {}}
      }
    
   // query: {'match_all': {}}
  },function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        //console.log(response);
        var result =[];

        console.log("--- Hits ---");
        response.hits.hits.forEach(function(hit){
          let model = { brand : "", volume : "", name : ""};
          model.brand = hit._source.Brand;
          model.volume = hit._source.Volume;
          model.name = hit._source.Name;

          result.push(model);
        })
        console.log(result);
        write_json(result);
        return  result;
      }
  });

}
module.exports = search;
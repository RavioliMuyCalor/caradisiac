var client = require('./connection.js');

client.indices.create({  
  index: 'renault'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});
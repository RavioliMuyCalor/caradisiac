var fs = require('fs');

function write_file(json)
{	
	try{

		fs.writeFile('my-app/src/' + 'models.json', '', function(){console.log('Clearing Models File')})
		fs.appendFile('my-app/src/' + 'models.json', JSON.stringify(json, null, 4), function(err){
			
		})
		console.log('Models written');
	}

	catch (err){
		return err;
	}
}

module.exports = write_file;
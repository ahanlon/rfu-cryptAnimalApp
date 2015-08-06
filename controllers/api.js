var CryptAnimal = require('../models/cryptanimals');

var apiController = {

	get 	: function(req, res){
		// Want to be able to get either All animals or just ONE
		var requestID = req.query._id;

		if (requestID){
			// One Animal
			CryptAnimal.findOne({_id : requestID}, function(err, animal){
				res.send(animal);
			});

		}
		else {

			// All animals
			CryptAnimal.find({}, function(err, animals){
				res.send(animals);
			});
		}
	},

	create 	: function(req, res){
		req.body.componentAnimals = req.body.componentAnimals.split(', ');
		// console.log(req.body);
		var animal = new CryptAnimal(req.body);
		animal.save(function(err, doc){
			res.send(doc);
		});

	},

	delete 	: function(req, res){

		CryptAnimal.remove({_id : req.params.id}, function(err, result){
			res.send(result);
		});
	}
}


module.exports = apiController;
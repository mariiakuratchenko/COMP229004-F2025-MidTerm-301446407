let CarModel = require('../models/cars');

module.exports.getCar = async function (req, res, next) {
  try {
    // Find one using the id sent in the parameter of the request
    let car = await CarModel.findOne({ _id: req.params.carId });

    res.json(car);

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.create = async function (req, res, next) {
  try {
    // Get input from the request
    let car = req.body;

    // Insert into the DB
    let result = await CarModel.create();
    console.log("Result: " + result);

    // Send a response
    res.status(200);
    res.json(
      {
        success: true,
        message: "Car created successfully.",
        carId: result._id
      }
    );

  } catch (error) {
    console.log(error);
    next(error);
  }

}

module.exports.getAll = async function (req, res, next) {
  try {
    // Get all from the DB.
    let list = await CarModel.find();

    // Send a response
    res.json(list);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.update = async function (req, res, next) {
  try {
    // Get input from the request
    let updatedCar = CarModel(req.body);
    updatedCar._id = req.params.carId;

    // Submit the change
    let result = await CarModel.updateOne({ _id: req.params.carId }, updatedCar);
    console.log("Result: " + result);

    // Handle the result: send a response.
    if (result.modifiedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Car updated successfully."
        }
      );
    } else {
      throw new Error('Car not updated. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}


module.exports.remove = async function (req, res, next) {
  try {
    // Delete  using the id sent in the parameter of the request
    let result = await CarModel.deleteOne({ _id: req.params.Id });
    console.log("Result: " + result);

    // Handle the result and send a response
    if (result.deletedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Car deleted successfully."
        }
      );
    } else {
      throw new Error('Car not deleted. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}
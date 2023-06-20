const taskModel = require("../models/taskModel")

const getAll = async (request, response) => {
  const tasks = await taskModel.getAll();
	return response.status(200).json(tasks);
}; 

module.exports = {	
  getAll
}; 
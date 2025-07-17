const HelloModel = require('./hello-world.model')

const findAll = async () => {
  return await HelloModel.find().sort({ timestamp: -1 })
}

const create = async message => {
  const newHello = new HelloModel({ message })
  return await newHello.save()
}

const findById = async id => {
  return await HelloModel.findById(id)
}

const updateById = async (id, message) => {
  return await HelloModel.findByIdAndUpdate(id, { message }, { new: true })
}

const deleteById = async id => {
  return await HelloModel.findByIdAndDelete(id)
}

module.exports = {
  findAll,
  create,
  findById,
  updateById,
  deleteById,
}

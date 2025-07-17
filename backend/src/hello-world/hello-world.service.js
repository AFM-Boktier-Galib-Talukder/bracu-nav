const helloRepository = require('./hello-world.repository')

const getAllMessages = async () => {
  try {
    return await helloRepository.findAll()
  } catch (error) {
    console.error('Error in getAllMessages service:', error)
    throw error
  }
}

const createMessage = async message => {
  try {
    if (!message || message.trim().length === 0) {
      throw new Error('Message is required')
    }

    const savedMessage = await helloRepository.create(message.trim())
    console.log('✅ New message saved:', savedMessage.message)

    return savedMessage
  } catch (error) {
    console.error('Error in createMessage service:', error)
    throw error
  }
}

const getMessageById = async id => {
  try {
    return await helloRepository.findById(id)
  } catch (error) {
    console.error('Error in getMessageById service:', error)
    throw error
  }
}

const updateMessage = async (id, message) => {
  try {
    return await helloRepository.updateById(id, message.trim())
  } catch (error) {
    console.error('Error in updateMessage service:', error)
    throw error
  }
}

const deleteMessage = async id => {
  try {
    return await helloRepository.deleteById(id)
  } catch (error) {
    console.error('Error in deleteMessage service:', error)
    throw error
  }
}

module.exports = {
  getAllMessages,
  createMessage,
  getMessageById,
  updateMessage,
  deleteMessage,
}

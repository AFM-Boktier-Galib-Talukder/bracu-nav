const helloService = require('./hello-world.service')

const getAllMessages = async (req, res) => {
  try {
    const messages = await helloService.getAllMessages()
    res.json(messages)
  } catch (error) {
    console.error('Error fetching messages:', error)
    res.status(500).json({ error: error.message })
  }
}

const createMessage = async (req, res) => {
  if (!req.body?.message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  try {
    const { message } = req.body
    const savedMessage = await helloService.createMessage(message)
    res.status(201).json(savedMessage)
  } catch (error) {
    console.error('Error saving message:', error)
    res.status(500).json({ error: error.message })
  }
}

const getMessageById = async (req, res) => {
  if (!req.params?.id) {
    return res.status(400).json({ error: 'Message id is required' })
  }

  try {
    const { id } = req.params
    const message = await helloService.getMessageById(id)

    if (!message) {
      return res.status(404).json({ error: 'Message not found' })
    }

    res.json(message)
  } catch (error) {
    console.error('Error fetching message:', error)
    res.status(500).json({ error: error.message })
  }
}

const updateMessage = async (req, res) => {
  if (!req.params?.id) {
    return res.status(400).json({ error: 'Message id is required' })
  }

  if (!req.body?.message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  try {
    const { id } = req.params
    const { message } = req.body

    const updatedMessage = await helloService.updateMessage(id, message)

    if (!updatedMessage) {
      return res.status(404).json({ error: 'Message not found' })
    }

    res.json(updatedMessage)
  } catch (error) {
    console.error('Error updating message:', error)
    res.status(500).json({ error: error.message })
  }
}

const deleteMessage = async (req, res) => {
  if (!req.params?.id) {
    return res.status(400).json({ error: 'Message id is required' })
  }

  try {
    const { id } = req.params
    const deletedMessage = await helloService.deleteMessage(id)

    if (!deletedMessage) {
      return res.status(404).json({ error: 'Message not found' })
    }

    res.json({ message: 'Message deleted successfully' })
  } catch (error) {
    console.error('Error deleting message:', error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllMessages,
  createMessage,
  getMessageById,
  updateMessage,
  deleteMessage,
}

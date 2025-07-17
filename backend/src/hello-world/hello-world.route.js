const express = require('express')
const router = express.Router()
const helloController = require('./hello-world.controller')

router.get('/', helloController.getAllMessages)
router.post('/', helloController.createMessage)
router.get('/:id', helloController.getMessageById)
router.put('/:id', helloController.updateMessage)
router.delete('/:id', helloController.deleteMessage)

module.exports = router

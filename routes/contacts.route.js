const { Router } = require('express')
const { contactsController } = require('../controllers/contacts.controller')

const router = Router()

router.get('/contacts', contactsController.getContacts)
router.post('/contacts', contactsController.createContact)
router.delete('/contacts/:id', contactsController.deleteContact)

module.exports = router

const { Router } = require('express')
const { imagesController } = require('../controllers/images.controller') 

const router = Router()

router.get('/images', imagesController.getImages)
router.post('/images/:id', imagesController.createImage)
router.delete('/images/:id', imagesController.deleteImage)

module.exports = router


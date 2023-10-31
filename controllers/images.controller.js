module.exports.imagesController = {
    getImages: (req, res) => {
        res.json(['img_1', 'img_2', 'img_3'])
    },

    createImage: (req, res) => {
        res.send(`Изображение с ID ${req.params.id} загружено`)
    },

    deleteImage: (req, res) => {
        res.send(`Изображение с ID ${req.params.id} удалено`)
    }
}

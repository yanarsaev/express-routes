module.exports.contactsController = {
    getContacts: (req, res) => {
        res.json([
            {
                name: 'Ali'
            },

            {
                name: 'Adam'
            },

            {
                name: 'Isa'
            }
        ])
    },

    createContact: (req, res) => {
        res.send('Контакт создан')
    },

    deleteContact: (req, res) => {
        res.send(`Контакт с ID ${req.params.id} удален`)
    }
}
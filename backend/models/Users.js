const mongoose = require('mongoose')

const Users = mongoose.model('Users', 
    {
        id: String,
        password: String,
        name: String,
        picture: String,
        background: String,
        age: Number,
        description: String,
        about: String,
        github: String,
        behance: String,
        projects: [
            {
                id: String,
                description: String,
                url: String,
            }
        ],
        experience: [
            {
                id: String,
                description: String,
            }
        ],
        socials: [
            {
                id: String,
                url: String,
            }
        ],
    }
)

module.exports = Users
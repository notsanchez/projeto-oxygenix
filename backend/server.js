require("dotenv").config();
const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Users = require('./models/Users')

const PORT = process.env.PORT || 8000

app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb'}));

app.use(cors())

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.get('/users', async (req, res) => {
  try {
    const user = await Users.find()

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/users/:id', async (req, res) => {
    try{
        const user = await Users.findOne({id: req.params.id})
        if(!user) return res.status(404).send()

        res.send(user)
    } catch(e){
        res.status(500).send(e)
    }
})

app.patch('/users/:id', async (req, res) => {

    const id = req.params.id
  
    const { password, name, picture, background, age, description, about, github, behance, projects, url, experience, socials } = req.body
  
    const user = {
        password,
        name,
        picture,
        background,
        age,
        description,
        about,
        github,
        behance,
        projects,
        socials,
        url,
        experience,
      }
  
    try {
      const updatedPerson = await Users.updateOne({id: req.params.id}, user)
  
      if (updatedPerson.matchedCount === 0) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
      }
  
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
})

app.post('/users', async (req, res) => {
    const { id, password, name, picture, background, age, description, about, github, behance, projects, url, experience, socials } = req.body
  
    const user = {
      id,
      password,
      name,
      picture,
      background,
      age,
      description,
      about,
      github,
      behance,
      projects,
      socials,
      url,
      experience,
    }
  
    try {
      await Users.create(user)
  
      res.status(201).json({ message: 'Usuario criado com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  mongoose
  .connect(
    process.env.MONGODBKEY,
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(PORT)
  })
  .catch((err) => console.log(err))
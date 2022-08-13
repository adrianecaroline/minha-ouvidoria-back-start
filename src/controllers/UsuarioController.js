const User = require('../models/usuario');
const Ouvidoria = require('../models/ouvidoria')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = 
{
  async ListUsuarios (req, res) {
    
    try {
      const usuarios = await User.findAll();
      return res.json(usuarios);

    } catch (error) {
      return console.error("erro: ", error)
    }
  },

  async getOneUser (req, res) {
   
    try {
     const id = req.body.username;
    //  console.log("qualquer coisa " + id)
     
     const usuario = await User.findOne({ where:{username: id }});
      
     return res.status(200).json(usuario);
           
    
    } catch (error) {
      res.status(500).json({erro: "Não foi possível receber os dados solicitados. Erro: " + error});
    }

  },

  async getUser (values) {
   
    try {
     const {username} = values;

     const usuario = await User.findOne({ where:{username: username }});
      
     return {usuario: usuario};
           
    } catch (error) {
      return  {erro: "Deu algum erro..."}
    }

  },

  async CreateUser(req, res) {

    const { username, nome, dtNasci, email, senha, condominio, bloco, apto, cep, uf } = req.body;
    const user = { username, nome, dtNasci, email, senha, condominio, bloco, apto, cep, uf }

    console.log(req.body)

    try {
      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.TOKEN_KEY
      )
    
      user.token = token;

      user.senha = await bcrypt.hash(user.senha, 8);
      
      const newUser = {...user, senha: user.senha, token}
      // console.log(newUser)
      await User.create(newUser)
      
      res.status(201).json(user)

    } catch (err) {

      res.status(500).json({erro: "Não foi possível criar usuário. Erro: " + err}); 
    }

  },

  // async CreateUser (req, res) {
  //   const { username, nome, dtNasci, email, senha, condominio, bloco, apto, cep, uf } = req.body;
  //   const user = { username, nome, dtNasci, email, senha, condominio, bloco, apto, cep, uf }

  //   try {
  //     await User.create(user);
      
  //     res.status(201).json({message: "Usuário criado com sucesso!"})

  //   } catch (error) {

  //     res.status(500).json({erro: "Não foi possível criar os dados. Erro: " + error});
  //   }
  // },

  async UpdateUser (req, res) {
    const id = req.params.username;
    const { nome, condominio, bloco, apto } = req.body;

    try {
      await User.update(req.body, {where: {username: id}})

      res.status(201).json({message: "Dados do usuário atualizados!"})
    } catch {
      res.status(500).json({erro: "Não foi possível atualizar os dados. Erro: " + error});
    }
    
    // res.send({data: newUser, message: 'Dados do usuário autalizados', status: 200})
  },

  async DeleteUser (req, res) {
    const id = req.params.username;

    try{
     const ouvidoria = await Ouvidoria.destroy( {where: {id_usuario: id}})
     const user = await User.destroy({ where: {username: id}})

      if(ouvidoria) {
        res.status(409).json({ message: "ok " })
      } else if (user){
        res.status(200).json({message: "Usuário deletado com sucesso!"})
      }
      
    } catch (erro) {
      res.status(500).json({erro: "Não foi possível deletar o usuário. Erro: " + erro});
    }
  },

  async DeleteUsers (req, res) {
    
    try{
      await User.de

      res.status(200).json({message: "Usuário deletado com sucesso!"})

    } catch (erro) {
      res.status(500).json({erro: "Não foi possível deletar o usuário. Erro: " + erro});
    }
  },

}



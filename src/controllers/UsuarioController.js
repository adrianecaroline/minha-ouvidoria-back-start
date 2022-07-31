const User = require('../models/usuario');

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
     const id = req.params.usuario;
     
     const usuario = await User.findOne({ where:{username: id }});
      
     res.status(200).send(usuario);
           
    
    } catch (error) {
      res.status(500).json({erro: "Não foi possível receber os dados solicitados. Erro: " + error});
    }

  },

  async CreateUser (req, res) {
    const { username, nome, dtNasci, email, senha, condominio, bloco, apto, cep, uf } = req.body;
    const user = { username, nome, dtNasci, email, senha, condominio, bloco, apto, cep, uf }

    try {
      await User.create(user);
      
      res.status(201).json({message: "Usuário criado com sucesso!"})

    } catch (error) {

      res.status(500).json({erro: "Não foi possível criar os dados. Erro: " + error});
    }
  },

  async UpdateUser (req, res) {
    const id = req.params.username;
    const { nome, dtNasci, email, senha } = req.body;

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
      await User.destroy({ where: {username: id}})

      res.status(200).json({message: "Usuário deletado com sucesso!"})
    } catch {
      res.status(500).json({erro: "Não foi possível deletar o usuário. Erro: " + error});
    }
  }
}



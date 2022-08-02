const Condominio = require('../models/condominio');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = 
{
  async getCondominio (req, res) {
    
    try {
      const condominio = await Condominio.findAll();
      return res.json(condominio);

    } catch (error) {
      return console.error("erro: ", error)
    }

  },

  async CreateCondominio (req, res) {
    const { razao_social, cnpj, nome_condominio, email, senha, endereco, cep, numero, uf } = req.body;
    const condomC = { razao_social, cnpj, nome_condominio, email, senha, endereco, cep, numero, uf  }

    const token = jwt.sign(
      { user_id: condomC.id, email },
      process.env.TOKEN_KEY
    )
  
    condomC.token = token;

    condomC.senha = await bcrypt.hash(condomC.senha, 8);
    
    const newCondominio = {...condomC, senha: condomC.senha, token}
    console.log(newCondominio)
    await Condominio.create(newCondominio);

    // await Condominio.create(condomC);

    res.status(201).json({ message: "Condomínio criado com sucesso!" })

  }
}


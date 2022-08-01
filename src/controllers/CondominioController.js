const Condominio = require('../models/condominio');

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
    const { id, razao_social, cnpj, nome_condominio, email, senha, endereco, cep, numero, uf } = req.body;
    const condomC = {  id, razao_social, cnpj, nome_condominio, email, senha, endereco, cep, numero, uf  }

    await Condominio.create(condomC);

    res.status(201).json({ message: "Condomínio criado com sucesso!" })

  }
}


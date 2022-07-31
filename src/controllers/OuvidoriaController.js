const Ouvidoria = require('../models/ouvidoria');

module.exports = 
{
  async ListRegisters (req, res) {
    try {
      const register = await Ouvidoria.findAll();
     
      return res.json(register);
    
    } catch (error) {
      
      return console.error("erro: " + error)
    }
  },

  async CreateRegister (req, res) {
    const { idProtocol, id_usuario, tipo_registro, assunto_registro, titulo, descricao, endereco, numero } = req.body;
    const register = { idProtocol, id_usuario, tipo_registro, assunto_registro, titulo, descricao, endereco, numero }

    try {
      await Ouvidoria.create(register);

      res.status(201).json({message: "Registro criado com sucesso!"})

   } catch (error){
      res.status(500).json({erro: "Não foi possível criar o registro. Erro: " + error});
   }
  } 
}
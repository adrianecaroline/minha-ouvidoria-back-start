const Ouvidoria = require('../models/ouvidoria');

module.exports = 
{
  async ListRegisters (req, res) {
    
    const register = await Ouvidoria.findAll();
     
    return res.json(register);
    
   
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
  },
  
  async DeleteRegister (req, res){
    const id = req.params.idProtocol;

    try{
      await Ouvidoria.destroy({ where: {idProtocol: id}})

      res.status(200).json({message: "Registro deletado com sucesso!"})
    } catch (error){
      res.status(500).json({erro: "Não foi possível deletar o registro. Erro: " + error});
    }
  }
}
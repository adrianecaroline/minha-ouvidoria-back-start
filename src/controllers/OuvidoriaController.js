const Ouvidoria = require('../models/ouvidoria');

module.exports = 
{
  async ListRegisters (req, res) {
    
    const register = await Ouvidoria.findAll();
     
    return res.json(register);
    
  },

  async UserRegister (req, res) {
    try {
      const id = await req.params.id_usuario;
      console.log(id)

      const usuario = await Ouvidoria.findAll({ where:{id_usuario: id }});
      
      if(usuario) {
        return res.status(200).json(usuario);
      } else {
        return res.status(404);
      }    
     
     } catch (error) {
        res.status(418).json({erro: "Não foi possível receber os dados solicitados. Erro: " + error});
     }
  },

  async ListParams (req, res) {
    try {
      const id = await req.params.registro;
      console.log(id)

      const registro = await Ouvidoria.findAll({ where:{tipo_registro: id }});
      
      if(registro) {
        return res.status(200).json(registro);
      } else {
        return res.status(404);
      }    
     
     } catch (error) {
        res.status(418).json({erro: "Não foi possível receber os dados solicitados. Erro: " + error});
     }
  },

  async CreateRegister (req, res) {
    const { id_usuario, tipo_registro, assunto_registro, titulo, descricao, endereco, numero, file_url } = req.body;
    const register = { id_usuario, tipo_registro, assunto_registro, titulo, descricao, endereco, numero, file_url }
    // console.log(register)

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
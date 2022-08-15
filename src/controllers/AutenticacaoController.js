const User = require('../models/usuario');
const Condominio = require('../models/condominio');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

module.exports = 
{
  async authUser (req, res) {
    const { email, senha } = req.body;

    const userExist = await User.findOne({where: {email}});

    if(!userExist) {
      return res.status(400).json({error: true, message: "Falha na autenticação do usuário."});
      
    } if(!(await bcrypt.compare(senha, userExist.senha))) {
      return res.status(400).json({error: true, message: "Senha incorreta."});
    }
   
    const existSenha =  await bcrypt.compare(senha, userExist.senha);
    console.log(existSenha)
    
      return res.status(200).json({
      user: {
        username: userExist.username,
        nome: userExist.nome,
        email: userExist.email,
        condominio: userExist.condominio,
        bloco: userExist.bloco,
        apto: userExist.apto
      },
      token: jwt.sign(
        {id: userExist.username},
        process.env.TOKEN_KEY
      )
    })
  },

  async authCondominio (req, res) {
    const { email, senha } = req.body;

    const condominioExist = await Condominio.findOne({where: {email}});

    if(!condominioExist) {
      return res.status(400).json({error: true, message: "Falha na autenticação do usuário."});
      
    } if(!(await bcrypt.compare(senha, condominioExist.senha))) {
      return res.status(400).json({error: true, message: "Senha incorreta."});
    }
   
    const existSenha =  await bcrypt.compare(senha, condominioExist.senha);
    console.log(existSenha)
    
      return res.status(200).json({
      condominio: {
        cnpj: condominioExist.cnpj,
        email: condominioExist.email
      },
      token: jwt.sign(
        {id: condominioExist.id},
        process.env.TOKEN_KEY
      )
    })
  },

  async findUser (req, res) {
    console.log(req)
    const  email  = req.email;
    const findUserEmail = await User.findOne({email: email});
    const findCondominioEmail = await Condominio.findOne({email: email});

    let emailExist = false;
    console.log(findUserEmail)
    console.log(findCondominioEmail)

    if(findUserEmail || findCondominioEmail) {
      emailExist = true;
    }
    return (emailExist);
  }
}

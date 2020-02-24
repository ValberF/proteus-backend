const bcrypt = require ('bcryptjs')

module.exports = app =>{
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validator

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const get = (req,res)=>{
        mysqlConnection.query('select * from administrador', (err, rows, fields)=>{
            if(!err)
                res.send(rows)
            else
                console.log(err)
        })
    }

    //pegar administrador
    const getu = (req,res)=>{
        mysqlConnection.query('select * from administrador where adm_id = ?', [req.params.id],(err, rows, fields)=>{
            if(!err)
                res.send(rows);
            else
                console.log(err)
        })
    }
    
    //deletar administrador
    const del = (req,res)=>{
        mysqlConnection.query('delete from administrador where adm_id = ?', [req.params.id],(err, rows, fields)=>{
            if(!err)
                res.send('delete bem sucedido');
            else
                console.log(err)
        })
    }
      
    //atualizar administrador
    const att = (req,res)=>{
        //console.log({...req.body})
        let adm = req.body;
        var sql = "SET @adm_id = ?; SET @adm_login = ?;SET @adm_senha = ?; SET @adm_fk_nut = ?;\
                   CALL AdministradorAddOrEdit(@adm_id, @adm_login, @adm_senha, @adm_fk_nut);";
        mysqlConnection.query(sql, [adm.adm_id, adm.adm_login, adm.adm_senha, adm.adm_fk_nut] ,(err, rows, fields)=>{
            if(!err)
                res.send('Atualização bem sucedida')
            else
                console.log(err)
        })
    }
        
    //adicionar administrador
    const add = async (req,res)=>{
        const admin = {...req.body}

        if(req.params.id) admin.adm_id = req.params.id

        try{
            existsOrError(admin.adm_login, 'Login não especificado')
            existsOrError(admin.adm_senha, 'Senha não especificada')

            
            const sql = "select * from administrador where adm_login = '" + admin.adm_login + "'" 
            
            let admFromDB = undefined

            await mysqlConnection.query(sql, (err, result) => {
                if(!err){
                    admFromDB = result
                }
                else{
                    console.log(err)
                }
            })
            if(!admin.adm_id){
                notExistsOrError(admFromDB, 'Usuário já cadastrado!')
            }
        }
        catch(msg){
            console.log(msg)
            return res.status(400).send(msg)
        }
        admin.adm_senha = encryptPassword(admin.adm_senha)

        if(admin.adm_id){
            const sql2 = "update administrador set adm_login = '" + admin.adm_login + "', adm_senha = '" + admin.adm_senha + "', adm_fk_nut = '" + admin.adm_fk_nut +"'"

            mysqlConnection.query(sql2, (err, result) => {
                if(!err){
                    res.status(204).send()
                }
                else{
                    console.log(err)
                    res.status(500).send(err)
                }
            })
        }
        else{
            const sql2 = "insert into administrador (adm_login, adm_senha, adm_fk_nut) values ('" + admin.adm_login + "', '" + admin.adm_senha + "', '" + admin.adm_fk_nut +"')"

            mysqlConnection.query(sql2, (err, result) => {
                if(!err){
                    res.status(204).send()
                }
                else{
                    console.log(err)
                    res.status(500).send(err)
                }
            })
        }
    }

    return {get, getu, del, add, att}

}

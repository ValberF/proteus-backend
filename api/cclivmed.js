module.exports = app => {
    const get = (req,res)=>{
        mysqlConnection.query('select * from cclivmed', (err, rows, fields)=>{
            if(!err)
                res.send(rows)
            else
                console.log(err)
        })
    }
    
    //pegar CcliVmed
    const getu = (req,res)=>{
        mysqlConnection.query('select * from cclivmed where cclivmed_id = ?', [req.params.id],(err, rows, fields)=>{
            if(!err)
                res.send(rows);
            else
                console.log(err)
        })
    }

    const getByVMed = (req, res) => {
        mysqlConnection.query('select * from cclivmed where cclivmed_fk_vmed = ?', [req.params.id],(err, rows, fields)=>{
            if(!err){
                res.send(rows);
            }     
            else
                console.log(err)
        })
    }
    
    //deletar CcliVmed
    const del = (req,res)=>{
        mysqlConnection.query('delete from cclivmed where cclivmed_id = ?', [req.params.id],(err, rows, fields)=>{
            if(!err)
                res.send('delete bem sucedido');
            else
                console.log(err)
        })
    }

    //adicionar CcliVmed
    const add = (req,res)=>{
        //console.log({...req.body})
        let cclivmed = req.body;
        if (cclivmed.cclivmed_id == null) cclivmed.cclivmed_id = 0
        var sql = "SET @cclivmed_id = ?; SET @cclivmed_fk_vmed = ?; SET @cclivmed_fk_ccli = ?;\
                   CALL CcliVmedAddOrEdit(@cclivmed_id, @cclivmed_fk_vmed, @cclivmed_fk_ccli);";
        mysqlConnection.query(sql, [cclivmed.cclivmed_id, cclivmed.cclivmed_fk_vmed, cclivmed.cclivmed_fk_ccli ] ,(err, rows, fields)=>{
            if(!err)
                rows.forEach(element => {
                    if(element.constructor == Array)
                    res.send('CcliVmed adicionado id : ' +element[0].cclivmed_id);
                });
            else
                console.log(err)
        })
    }

    
    //atualizar CcliVmed
    const att = (req,res)=>{
        let cclivmed = req.body;
        var sql = "SET @cclivmed_id = ?; SET @cclivmed_fk_vmed = ?; SET @cclivmed_fk_ccli = ?;\
                   CALL CcliVmedAddOrEdit(@cclivmed_id, @cclivmed_fk_vmed, @cclivmed_fk_ccli);";
        mysqlConnection.query(sql, [cclivmed.cclivmed_id, cclivmed.cclivmed_fk_vmed, cclivmed.cclivmed_fk_ccli ] ,(err, rows, fields)=>{
            if(!err)
                res.send('Atualização bem sucedida')
            else
                console.log(err)
        })
    }

    return {get, getu, getByVMed, del, add, att}
}
module.exports = app => {
    const get = (req,res)=>{
        mysqlConnection.query('select * from efisvmed', (err, rows, fields)=>{
            if(!err)
                res.send(rows)
            else
                console.log(err)
        })
    }
    
    //pegar EfisVmed
    const getu = (req,res)=> {
        mysqlConnection.query('select * from efisvmed where efisvmed_id = ?', [req.params.id],(err, rows, fields)=>{
            if(!err)
                res.send(rows);
            else
                console.log(err)
        })
    }
    
    const getByVMed = (req, res) => {
        mysqlConnection.query('select * from efisvmed where efisvmed_fk_vmed = ?', [req.params.id],(err, rows, fields)=>{
            if(!err){
                res.send(rows);
            }     
            else
                console.log(err)
        })
    }

    //deletar EfisVmed
    const del = (req,res)=>{
        mysqlConnection.query('delete from efisvmed where efisvmed_id = ?', [req.params.id],(err, rows, fields)=>{
            if(!err)
                res.send('delete bem sucedido');
            else
                console.log(err)
        })
    }

    //adicionar EfisVmed
    const add = (req,res)=> {
        //console.log({...req.body})
        let efisvmed = req.body;

        const sql = `insert into efisvmed (efisvmed_fk_vmed, efisvmed_fk_efis, efisvmed_val)\ 
        values (${efisvmed.efisvmed_fk_vmed}, ${efisvmed.efisvmed_fk_efis}, ${efisvmed.efisvmed_val})`

        mysqlConnection.query(sql, (err, result) => {
            if(!err){
                res.send('Efisvmed adicionada id: ' + result.insertId)
            }
            else{
                console.log(err)
            }
        })
    }

    
    //atualizar EfisVmed
    const att = (req,res)=> {
        let efisemad = req.body;
        var sql = "SET @efisvmed_id = ?; SET @efisvmed_fk_vmed = ?;SET @efisvmed_fk_efis = ?;SET @efisvmed_val = ?;\
                   CALL EfisVmedAddOrEdit(@efisvmed_id, @efisvmed_fk_vmed, @efisvmed_fk_efis , @efisvmed_val );";
        mysqlConnection.query(sql, [efisemad.efisvmed_id, efisemad.efisvmed_fk_vmed, efisemad.efisvmed_fk_efis, efisemad.efisvmed_val] ,(err, rows, fields)=>{
            if(!err)
                res.send('Atualização bem sucedida')
            else
                console.log(err)
        })
    }

    return {get, getu, getByVMed, del, add, att}
}
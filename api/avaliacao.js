module.exports = app => {
    const get = (req,res)=>{
        mysqlConnection.query('select * from avaliacao', (err, rows, fields)=>{
            if(!err)
                res.send(rows)
            else
                console.log(err)
        })
    }
    
    //pegar avaliacao
    const getu = (req,res)=>{
        mysqlConnection.query('select * from avaliacao where ava_id = ?', [req.params.id],(err, rows, fields)=>{
            if(!err)
                res.send(rows);
            else
                console.log(err)
        })
    }
    
    //deletar avaliacao
    const del = (req,res)=>{
        mysqlConnection.query('delete from avaliacao where ava_id = ?', [req.params.id],(err, rows, fields)=>{
            if(!err)
                res.send('delete bem sucedido');
            else
                console.log(err)
        })
    }

    //adicionar avaliacao
    const add = (req,res)=>{
        //console.log({...req.body})
        let ava = req.body;
        console.log({...ava})
        if (ava.ava_id == null) ava.ava_id = 0
        var sql = "SET @ava_id = ?; SET @ava_fk_pac = ?; SET @ava_fk_nut = ?; SET @ava_sit = ?;SET @ava_con = ?; SET @ava_ris_nut = ?; SET @ava_t = ?;\
                   SET @ava_m = ?; SET @ava_n = ?;SET @ava_g = ?; SET @ava_dat_pac = ?; SET @ava_dat_med = ?;\
                   SET @ava_aco = ?; SET @ava_diag = ?;SET @ava_tra = ?; SET @ava_ale = ?; SET @ava_atvd_fis = ?;\
                   SET @ava_rit_uri = ?; SET @ava_rit_int = ?;SET @ava_estad = ?; SET @ava_mdcm = ?;\
                   SET @ava_exames = ?; SET @ava_consistencia = ?; SET @ava_evolucao = ?; \
                   CALL AvaliacaoAddOrEdit(@ava_id, @ava_fk_pac, @ava_fk_nut, @ava_sit, @ava_con, @ava_ris_nut, @ava_t,\
                                           @ava_m, @ava_n, @ava_g, @ava_dat_pac, @ava_dat_med,\
                                           @ava_aco, @ava_diag, @ava_tra, @ava_ale, @ava_atvd_fis,\
                                           @ava_rit_uri, @ava_rit_int, @ava_estad, @ava_mdcm,\
                                           @ava_exames, @ava_consistencia, @ava_evolucao);";
        mysqlConnection.query(sql, [ava.ava_id, ava.ava_fk_pac, ava.ava_fk_nut, ava.ava_sit, ava.ava_con, ava.ava_ris_nut, ava.ava_t,
                                    ava.ava_m, ava.ava_n, ava.ava_g, ava.ava_dat_pac, ava.ava_dat_med,
                                    ava.ava_aco, ava.ava_diag, ava.ava_tra, ava.ava_ale, ava.ava_atvd_fis,
                                    ava.ava_rit_uri, ava.ava_rit_int, ava.ava_estad, ava.ava_mdcm,
                                    ava.ava_exames, ava.ava_consistencia, ava.ava_evolucao] ,(err, rows, fields)=>{
            if(!err)
                rows.forEach(element => {
                    if(element.constructor == Array)
                    res.send('Avaliacao adicionada id : ' +element[0].ava_id);
                });
            else
                console.log(err)
        })
    }
    
    //atualizar avaliacao
    const att = (req,res)=>{
        let ava = req.body;
        console.log({...ava})
        var sql = "SET @ava_id = ?; SET @ava_fk_pac = ?; SET @ava_fk_nut = ?; SET @ava_sit = ?;SET @ava_con = ?; SET @ava_ris_nut = ?; SET @ava_t = ?;\
                   SET @ava_m = ?; SET @ava_n = ?;SET @ava_g = ?; SET @ava_dat_pac = ?; SET @ava_dat_med = ?;\
                   SET @ava_aco = ?; SET @ava_diag = ?;SET @ava_tra = ?; SET @ava_ale = ?; SET @ava_atvd_fis = ?;\
                   SET @ava_rit_uri = ?; SET @ava_rit_int = ?;SET @ava_estad = ?; SET @ava_mdcm = ?;\
                   SET @ava_exames = ?; SET @ava_consistencia = ?; SET @ava_evolucao = ?; \
                   CALL AvaliacaoAddOrEdit(@ava_id, @ava_fk_pac, @ava_fk_nut, @ava_sit, @ava_con, @ava_ris_nut, @ava_t,\
                                           @ava_m, @ava_n, @ava_g, @ava_dat_pac, @ava_dat_med,\
                                           @ava_aco, @ava_diag, @ava_tra, @ava_ale, @ava_atvd_fis,\
                                           @ava_rit_uri, @ava_rit_int, @ava_estad, @ava_mdcm,\
                                           @ava_exames, @ava_consistencia, @ava_evolucao);";
        mysqlConnection.query(sql, [ava.ava_id, ava.ava_fk_pac, ava.ava_fk_nut, ava.ava_sit, ava.ava_con, ava.ava_ris_nut, ava.ava_t,
                                    ava.ava_m, ava.ava_n, ava.ava_g, ava.ava_dat_pac, ava.ava_dat_med,
                                    ava.ava_aco, ava.ava_diag, ava.ava_tra, ava.ava_ale, ava.ava_atvd_fis,
                                    ava.ava_rit_uri, ava.ava_rit_int, ava.ava_estad, ava.ava_mdcm, 
                                    ava.ava_exames, ava.ava_consistencia, ava.ava_evolucao] ,(err, rows, fields)=>{
            if(!err)
                res.send('Atualização bem sucedida')
            else
                console.log(err)
        })
    }

    return {get, getu, del, add, att}
}
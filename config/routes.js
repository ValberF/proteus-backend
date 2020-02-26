module.exports = app => {
   app.post('/login', app.api.auth.signIn)

   app.route('/administrador')
      .get(app.api.administrador.get)  
      .post(app.api.administrador.add)
      
   app.route('/administrador/:id')
      .get(app.api.administrador.getu) 
      .put(app.api.administrador.att)
      .delete(app.api.administrador.del) 

   app.route('/antropometria')
      .get(app.api.antropometria.get)  
      .post(app.api.antropometria.add)
      
   app.route('/antropometria/:id')
      .get(app.api.antropometria.getu) 
      .put(app.api.antropometria.att)
      .delete(app.api.antropometria.del) 

   app.route('/avaliacao')
      .get(app.api.avaliacao.get)  
      .post(app.api.avaliacao.add)

   app.route('/avaliacao/:id')
      .get(app.api.avaliacao.getu) 
      .put(app.api.avaliacao.att)
      .delete(app.api.avaliacao.del) 
      
   app.route('/avaliacaoglobal')
      .get(app.api.avaliacaoglobal.get)  
      .post(app.api.avaliacaoglobal.add)
      
   app.route('/avaliacaoglobal/:id')
      .get(app.api.avaliacaoglobal.getu) 
      .put(app.api.avaliacaoglobal.att)
      .delete(app.api.avaliacaoglobal.del) 

   app.route('/nutricionista')
      .get(app.api.nutricionista.get)  
      .post(app.api.nutricionista.add)

   app.route('/nutricionista/:id') 
      .get(app.api.nutricionista.getu) 
      .delete(app.api.nutricionista.del) 
      .put(app.api.nutricionista.att)

   app.route('/paciente')
      .get(app.api.paciente.get)  
      .post(app.api.paciente.add)

   app.route('/paciente/:id')
      .get(app.api.paciente.getu) 
      .delete(app.api.paciente.del) 
      .put(app.api.paciente.att)

   app.route('/vmedico')
      .get(app.api.versaomedico.get)  
      .post(app.api.versaomedico.add)

   app.route('/vmedico/:id')
      .get(app.api.versaomedico.getu) 
      .delete(app.api.versaomedico.del) 
      .put(app.api.versaomedico.att)

   app.route('/vpaciente')
      .get(app.api.versaopaciente.get)  
      .post(app.api.versaopaciente.add)
      
   app.route('/vpaciente/:id')
      .get(app.api.versaopaciente.getu) 
      .delete(app.api.versaopaciente.del)
      .put(app.api.versaopaciente.att)

   app.route('/sintomas')
      .get(app.api.sintomas.get)  
      .post(app.api.sintomas.add)
   
   app.route('/sintomas/:id')
      .get(app.api.sintomas.getu) 
      .delete(app.api.sintomas.del) 
      .put(app.api.sintomas.att)

   app.route('/examefisico')
      .get(app.api.examefisico.get)  
      .post(app.api.examefisico.add)

   app.route('/examefisico/:id')
      .get(app.api.examefisico.getu) 
      .delete(app.api.examefisico.del) 
      .put(app.api.examefisico.att)

   app.route('/condicaoclinica')
      .get(app.api.condicaoclinica.get)  
      .post(app.api.condicaoclinica.add)

   app.route('/condicaoclinica/:id')
      .get(app.api.condicaoclinica.getu) 
      .delete(app.api.condicaoclinica.del) 
      .put(app.api.condicaoclinica.att)

   app.route('/efisvmed')
      .get(app.api.efisvmed.get)  
      .post(app.api.efisvmed.add)

   app.route('/efisvmed/:id')
      .get(app.api.efisvmed.getu) 
      .delete(app.api.efisvmed.del) 
      .put(app.api.efisvmed.att)

   app.route('/efisvmedfk/:id')
      .get(app.api.efisvmed.getByVMed)

   app.route('/cclivmed')
      .get(app.api.cclivmed.get)  
      .post(app.api.cclivmed.add)
      
   app.route('/cclivmed/:id')
      .get(app.api.cclivmed.getu) 
      .delete(app.api.cclivmed.del) 
      .put(app.api.cclivmed.att)

   app.route('/cclivmedfk/:id')
      .get(app.api.cclivmed.getByVMed)

   app.route('/sinvpac')
      .get(app.api.sinvpac.get)  
      .post(app.api.sinvpac.add)
      
   app.route('/sinvpac/:id')
      .get(app.api.sinvpac.getu) 
      .delete(app.api.sinvpac.del) 
      .put(app.api.sinvpac.att)
}
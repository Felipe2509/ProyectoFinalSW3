const controller = {};

controller.listarDocentes = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM docente', (err, rows)=>{
            if(err){
                res.json(err);
            }
 //           console.log(rows);
            res.render('docentes', {
                data: rows
            });
        });
    })
};

controller.addDocente = (req, res) => {
    res.render('addDocente');
};

controller.saveDocente = (req,res)=>{
    const obj = JSON.parse(JSON.stringify(req.body));
   // console.log(obj);
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO docente SET ?', [obj], (error, customer) => {
            if(error){
                res.json(error);
            }else{
                console.log(customer);
                res.redirect('/');
            }
                
        });
    })
};

controller.editDocente = (req, res) => {
    const id = req.params.DOCENTE_ID;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM docente WHERE DOCENTE_ID = ?', [id], (error, row) => {
            if(error){
                res.json(error);
            } else {
                console.log(row);
                res.render('editDocente', { 
                    docente: row[0] 
                });
            }
        })
    })
};

controller.updateDocente = (req,res)=>{
    const id = req.params.DOCENTE_ID;
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj);
    req.getConnection((err, conn)=>{
        conn.query('UPDATE docente SET ? WHERE DOCENTE_ID = ?', [obj, id], (error, customer) => {
            if(error){
                res.json(error);
            }else{
                console.log(customer);
                res.redirect('/');
            }
            
        });
    })
};

controller.stateDocente = (req,res)=>{
    const id = req.params.DOCENTE_ID;
    console.log(id);
    req.getConnection((err, conn)=>{
        conn.query('SELECT DOCENTE_ESTADO FROM docente WHERE DOCENTE_ID = ?', [id], (error, row)=>{
            if(error){
                res.json(error);
            }else{
                var estado = '';
                console.log(row[0].DOCENTE_ESTADO);
                if(row[0].DOCENTE_ESTADO=='Activo'){
                    estado = 'Inactivo';
                }else{
                    estado = 'Activo';
                }
                console.log(estado);
                conn.query('UPDATE docente SET DOCENTE_ESTADO = ? WHERE DOCENTE_ID = ?', [estado, id], (error, customer) => {
                    if(error){
                        res.json(error);
                    }else{
                        console.log(customer);
                        res.redirect('/');
                    }
                    
                });
            }
            
        })
    })
};

module.exports = controller;
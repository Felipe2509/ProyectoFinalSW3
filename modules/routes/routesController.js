const controller = {};

controller.listar = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM docente', (err, rows)=>{
            if(err){
                res.json(err);
            }
            console.log(rows);
            res.render('docentes', {
                data: rows
            });
        });
    })
};

module.exports = controller;
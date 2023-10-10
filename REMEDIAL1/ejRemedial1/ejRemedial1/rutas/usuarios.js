var ruta=require("express").Router();

ruta.get("/",(req,res)=>{
    res.render("inicio");
});

ruta.get("/inicio",(req,res)=>{
    res.render("inicio");
});

ruta.post('/alumnos', (req, res) => {
    const alumno = req.body.alumno;
    const grupo = req.body.grupo;
    const cuatrimestre = req.body.cuatrimestre;
    const faltante = 11-cuatrimestre;
  
    res.render('alumnos', { alumno, grupo, cuatrimestre, faltante });
});

ruta.get('/alumnosNuevo', (req, res) => {
    const { alumno, grupo, cuatrimestre, faltante } = req.query;
  
    res.render('alumnosNuevo', { alumno, grupo, cuatrimestre, faltante });
});

module.exports=ruta;
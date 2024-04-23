import bcryptjs from "bcryptjs";

const usuarios = [{
    user: "Carlos",
    email: "carlosastorga0101@gmail.com",
    password: "$2a$05$GFB1RXgPP1RXgsd5MNmV8emFF4z1aQ.DMxlD4A2Plg/DIOtwL4nZC"

}]

async function login(req, res){

}

async function register(req, res){
    console.log(req.body);
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    if (!user || !email || !password) {
        res.status(400).send({
            status:"Error", 
            message:"Los campos estan incompletos"})
    }
    const usuarioARevisar = usuarios.find(usuario => usuarios.user === user);
    if (usuarioARevisar) {
        res.status(400).send({
            status:"Error", 
            message:"Este usuario ya existe"})
    } 
    const salt = await bcryptjs.genSalt(5);
    const hashpassword = await bcryptjs.hash(password, salt);
    const nuevoUsuario  = {
        user, email, password: hashpassword
    }
    usuarios.push(nuevoUsuario),
    console.log(usuarios);
    res.status(201).send({status: "ok", message: 'Usuario ${nuevoUsuario.user} agregado', redirect:"/"})
}

export const methods = {
    login,
    register
}
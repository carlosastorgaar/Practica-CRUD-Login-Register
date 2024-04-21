async function login(req, res){

}

async function register(req, res){
    console.log(req.body);
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;

}

export const methods = {
    login,
    register
}
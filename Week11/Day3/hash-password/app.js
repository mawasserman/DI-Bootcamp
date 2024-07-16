const bcrypt = require('bcrypt'); // tem que sempre estar no topo do file

const hash = (pass) => {
    // const saltRounds = 10;
    const salt = bcrypy.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);
    return hash;
}

console.log(hash(1234)); // $2b$10$3
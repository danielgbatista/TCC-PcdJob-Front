"use strict";

const postCandidato =  async(candidato) => {
    const urlCadastro = 'http://10.107.144.20:8080/candidato/cadastrar'
    const options = {
        method: 'POST',
        body:candidato,
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
            'Access-Control-Allow-Headers': '*'
        },
        mode: 'cors'
    }

    await fetch(urlCadastro, options).then(resp=>console.log(resp))
   

}

const getCandidato = () => {

    const urlListar = 'http://10.107.144.20:8080/candidato/listar'
    const options = {
        method: 'GET',
        mode: 'cors'
    }
    fetch(urlListar, options).then(resp=>console.log(resp))

}

export {postCandidato, getCandidato}

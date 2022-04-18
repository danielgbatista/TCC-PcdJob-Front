"use strict";

const postCandidato =  async(candidato) => {
    const urlCadastro = 'http://10.107.144.24:8080/candidato/cadastrar'
    const options = {
        method: 'POST',
        body:JSON.stringify(candidato),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept':'application/json'
        }),
        mode: 'cors'
    }

    await fetch(urlCadastro, options).then(resp=>console.log(resp))
   

}

const putCandidato =  async(candidato) => {
    const urlCadastro = `http://10.107.144.24:8080/candidato/atualizar`
    const options = {
        method: 'PUT',
        body:JSON.stringify(candidato),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept':'application/json'
        }),
        mode: 'cors'
    }

    await fetch(urlCadastro, options).then(resp=>console.log(resp))
   

}

const getCandidato = () => {

    const urlListar = 'http://10.107.144.24:8080/candidato/listar'
    const options = {
        method: 'GET',
        mode: 'cors'
    }
    fetch(urlListar, options).then(resp=>console.log(resp))

}

export {postCandidato, getCandidato, putCandidato}

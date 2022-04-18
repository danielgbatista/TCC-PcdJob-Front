'use strict';

const postEmpresa =  async(candidato) => {
    const urlCadastro = 'http://10.107.144.24:8080/empresa/cadastrar'
    const options = {
        method: 'POST',
        body:candidato,
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
        },
        mode: 'cors'
    }

    await fetch(urlCadastro, options).then(resp=>console.log(resp))
   

}

const putEmpresa =  async(candidato) => {
    const urlCadastro = 'http://10.107.144.24:8080/empresa/atualizar'
    const options = {
        method: 'PUT',
        body:candidato,
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
        },
        mode: 'cors'
    }

    await fetch(urlCadastro, options).then(resp=>console.log(resp))
   

}

const getEmpresa = () => {

    const urlListar = 'http://10.107.144.24:8080/empresa/listar'
    const options = {
        method: 'GET',
        mode: 'cors'
    }
    fetch(urlListar, options).then(resp=>console.log(resp))

}
"use strict";

const postCandidato =  async(candidato) => {
    const urlCadastrar = 'http://10.107.144.24:8080/candidato/cadastrar'
    const options = {
        method: 'POST',
        body:JSON.stringify(candidato),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept':'application/json'
        }),
        mode: 'cors'
    }

    await fetch(urlCadastrar, options).then(resp=>console.log(resp))
   

}

const putProduto = async (candidato) => {
    const urlAtualizar = 'http://10.107.144.24:8080/candidato/atualizar/'
    const options = {
        method: 'PUT',
        body: JSON.stringify(candidato),
        headers: {
            'content-Type' : 'application/json'
        },
        mode:'cors'
    }

    await fetch(`${urlAtualizar}${candidato.id}`, options)
}

const deleteProduto = async (candidato) => {
    const urldeletar = 'http://10.107.144.24:8080/candidato/deletar/'
    const options = {
        method: 'DELETE',
        headers: {
            'content-Type' : 'application/json'
        },
        mode:'cors'
    }

    await fetch(`${urldeletar}${candidato.id}`, options)
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

'use strict';

const postEmpresa =  async(empresa) => {
    const urlCadastro = 'http://10.107.144.24:8080/empresa/cadastrar'
    const options = {
        method: 'POST',
        body:empresa,
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
        },
        mode: 'cors'
    }

    await fetch(urlCadastro, options).then(resp=>console.log(resp))
   

}

const putProduto = async (empresa) => {
    const urlAtualizar = 'http://10.107.144.24:8080/empresa/atualizar/'
    const options = {
        method: 'PUT',
        body: JSON.stringify(empresa),
        headers: {
            'content-Type' : 'application/json'
        },
        mode:'cors'
    }

    await fetch(`${urlAtualizar}${empresa.id}`, options)
}

const deleteProduto = async (empresa) => {
    const urldeletar = 'http://10.107.144.24:8080/empresa/deletar/'
    const options = {
        method: 'DELETE',
        headers: {
            'content-Type' : 'application/json'
        },
        mode:'cors'
    }

    await fetch(`${urldeletar}${empresa.id}`, options)
}

const getEmpresa = () => {

    const urlListar = 'http://10.107.144.24:8080/empresa/listar'
    const options = {
        method: 'GET',
        mode: 'cors'
    }
    fetch(urlListar, options).then(resp=>console.log(resp))

}
'use strict';

import { postCandidato } from "./candidatoCadastro.js" ;

const c = document.querySelector('#txtNome').value;

console.log(c)

// const cadastrarCandidato =  async() => {
//     const candidato = {
//         nome: document.getElementById('txtNome').value,
//         email: document.getElementById('txtEmail').value,
//         senha: document.getElementById('pwdSenha').value,
//         genero: "PREFIRO_NAO_INFORMAR"
//     }

//    await postCandidato(candidato)

// }

// document.getElementById('btnCadastro').addEventListener('click', cadastrarCandidato)

const funCtion = () => {

const nome = document.getElementById('txtNome').value
const email = document.getElementById('txtEmail').value
const senha = document.getElementById('pwdSenha').value

console.log(nome    )
let url = 'http://10.107.144.20:8080/candidato/cadastrar';

        console.log(fetch(url, {method: 'POST', headers: {
            'Content-Type': 'application/json',     
        },mode:"no-cors", body:JSON.stringify( {email: email,  nome: nome, senha:senha, genero: 'PREFIRO_NAO_INFORMAR'}),
        }))

}



document.getElementById('btnCadastro').addEventListener('click', funCtion)
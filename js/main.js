'use strict';

import { postCandidato, getCandidato} from "./candidatoCadastro.js" ;

// const c = document.querySelector('#txtNome').value;



// const cadastrarCandidato =  async () => {
//     const candidato = {
//         nome: document.getElementById('txtNome').value,
//         email: document.getElementById('txtEmail').value,
//         senha: document.getElementById('pwdSenha').value,
//         genero: "PREFIRO_NAO_INFORMAR"
//     }

//     await postCandidato(candidato)

// }

// document.getElementById('btnCadastro').addEventListener('click', cadastrarCandidato)

const funCtion = () => {

const nome = document.getElementById('txtNome').value
const email = document.getElementById('txtEmail').value
const senha = document.getElementById('pwdSenha').value



let url = 'http://10.107.144.20:8080/candidato/cadastrar';

        console.log(fetch(url, {method: 'POST', headers: new Headers({
            'Content-Type': 'application/json',
            'Accept':'application/json',
            'Access-Control-Allow-Headers': '*'   
        }), body:{email: 'dsadsa@dsda',  nome: 'danizinho', senha:'1234', genero: 'PREFIRO_NAO_INFORMAR'},
        }))

}



document.getElementById('btnCadastro').addEventListener('click', funCtion)
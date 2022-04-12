"use strict";

const postCandidato = async (candidato) => {
    const urlCadastro = 'http://10.107.144.20:8080/candidato/cadastrar'
    const options = {
        method: 'POST',
        body: JSON.stringify(candidato),
        headers: {
            // 'content-Type' : 'application/json'
        },
        mode: 'no-cors'
    }
    await fetch(urlCadastro, options)
}

export {postCandidato}

let nome:string = ""
let idade:number = 1
const cpf:string | number = "111.222.333-44"
const qualquer: [] = []
let lista: string[] = ["Mailan", "Bernardo", "Tsuda", "Bianca", "Micael"]
const obij1: {} = {id: 10, idade: 120, nome: "Mathew"}

const obj2: user = {id:11, idade:90, nome: "Matt"}

type user = {
    id:number,
    idade:number,
    nome:string
}

type tema = "claro" | "escuro" | "Roxo" | "Amarelo"

const meuTema: tema = "Roxo"

type HTTPCode = 200 | 201 | 400 | 401 | 404 | 500 | 301

function acesso(url:string):HTTPCode {
    if (url === "https://github.com/"){
        return 200
    } else if (url === "http://localhost:3000/") {
        return 500
    } else {
        return 404
    }
}

console.log(acesso("http://youtube.com/"))
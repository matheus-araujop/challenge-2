let age = 32
let humam = true

if(age >= 18){
    console.log("Aproveite!!")
} 
// Exerício 1

if(age >= 18 & humam == true){

    console.log("Aproveite, humano!!")
} 
// Exerício 2

let birth_month = "Janeiro"

if(birth_month === "Janeiro" | birth_month === "Dezembro" ){

    console.log("Você faz aniversário em dezembro ou janeiro!!")

}
// Exerício 3

let name = "Ricardo"
if(name.substr(0, 1) === "R") {
    console.log("Seu nome começa com R!")
}
// Exerício Bônus 1

let last_name = "Araujo"

if(last_name.length >= 6 | name.substr(0, 1) === "E"){
    console.log("Seu nome começa com R ou seu sobrenome tem mais de 6 letras!!")
}
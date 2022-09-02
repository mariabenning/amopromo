



fetch("https://stark-cove-48986.herokuapp.com/seguros/motivos").then(resposta=>{

return(resposta.json())


}).then(corpo=>{
console.log(corpo)
document.getElementById("custo").innerHTML = corpo.json()

})








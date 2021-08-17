const tbodyElement = document.querySelector(".tbody")

window.addEventListener("DOMContentLoaded",
(event) =>{
    loadTodos()
})

async function loadTodos(){
    let response = await fetch("/todos",{
        method:"GET"
    });
    response = await response.json();
    // console.log(response)
    renderTodos(response.data.reverse())
    
}
 function renderTodos(array){
     for(let todo of array){
        
        const newTrElement = document.createElement("tr")
        const newIdElement = document.createElement("td")
        const newNameElement = document.createElement("td")
        const newNumberElement = document.createElement("td")
        const newServicesTypeElement = document.createElement("td")

        const newTdButtonElement = document.createElement("td")
        const newDeleteButtonElement = document.createElement("button")
         newDeleteButtonElement.classList.add("btn-danger","text-light","rounded-0")
        newDeleteButtonElement.textContent ="O'chirish"

        newTrElement.appendChild(newIdElement)
        newTrElement.appendChild(newNameElement)
        newTrElement.appendChild(newNumberElement)
        newTrElement.appendChild(newServicesTypeElement)
        newTdButtonElement.appendChild(newDeleteButtonElement)
        newTrElement.appendChild(newTdButtonElement)
tbodyElement.appendChild(newTrElement)
        }

 }

 const formElement = document.querySelector(".content-form")
 formElement.addEventListener("submit",event=>{
     event.preventDefault()

    //  10:44 sekunddan
 })
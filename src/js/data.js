const formulario = document.getElementById("formulari");
const input = document.getElementById("input")
const llistaCategory = document.getElementById("opcions")
const template = document.getElementById("template").content
const fragment = document.createDocumentFragment()
const addBtn = document.querySelector("tick2")
const boto = document.getElementById("BotoLlista")

//conté les categories
var category = {}

//Pintar les categories que ja estaven al localStorage
document.addEventListener("DOMContentLoaded", () =>{
   if(localStorage.getItem("category")){
        category = JSON.parse(localStorage.getItem("category"))
        
    }
    pintarTareas()
})

llistaCategory.addEventListener('click', e =>{
    btnAccion(e)
    console.log("le has dado click")
})

formulario.addEventListener('submit', e =>{
    e.preventDefault()
    //console.log(e.target[0].value);
    setTarea(e)
})

//quan no s'introdueix res
const setTarea = e => {
    if(input.value.trim() ===''){
        console.log("esta vacio");
        return;
    }
    
    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false 
    }

    category[tarea.id] = tarea
    
    //console.log(e.target[0].value);
    formulario.reset()
    input.focus()
    pintarTareas()
}
const pintarTareas = () =>{

    localStorage.setItem("category", JSON.stringify(category))
    //Neteja el localStorage
    //localStorage.clear("category");

    llistaCategory.innerHTML = ''
    Object.values(category).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto
        clone.querySelectorAll('i')[0].dataset.id = tarea.id
        //console.log(tarea.id)
        fragment.appendChild(clone)
    })
    
    llistaCategory.appendChild(fragment)
}

//quan se li dona al delete button

const btnAccion = e => {
    if((e.target.classList.contains(boto))){
        delete category[e.target.dataset.id]
        pintarTareas()
        console.log(category)
    }else{
        delete category[e.target.dataset.id]
        pintarTareas()
        console.log()
        //console.log(category)
    }
    e.stopPropagation()
}

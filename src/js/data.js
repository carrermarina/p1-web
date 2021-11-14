import { Singleton } from "./singleton/singleton";

const formulario = document.getElementById("formulari");
const input = document.getElementById("input");
const llistaCategory = document.getElementById("opcions");
const template = document.getElementById("template").content;
const fragment = document.createDocumentFragment();
const addBtn = document.querySelector("tick2");
const boto = document.getElementById("BotoLlista");
const singleton = new Singleton();
const botoAfegir = document.getElementById("afegir");
const botoCancel = document.getElementById("cancel");

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

botoCancel.addEventListener('click', e =>{
    btnAccion(e);
    console.log("le has dado click");
    form = document.getElementById("formulari2");

    form.getElementById["title"].value = "";
    form.getElementById["description"].value = "";
    form.getElementById["deadline"].value = "";
})

botoAfegir.addEventListener('click', e =>{
    btnAccion(e);
        //agafem el formulari en la variable form
        form = document.getElementById("formulari2");
        title = form.getElementById("title")
        deadline = form.getElementById("deadline");
        description = form.getElementById("description");
        completed = form.getElementById("completed");

        //PROVA
        form.getElementById["title"].value = "HOLA";

        //si estan buides
        if (title === "" || deadline === ""  || description === "") {
            
            console.log("Falta informació sobre la tasca!");
            return;
        } else {
            //si title te mes de 100 caracters
            if(title.length > 100) {
                console.log("El títol ha de tenir menys de 100 caracters");
            } else {
                if(description.length > 1000) {
                    console.log("La descripció ha de tenir menys de 1000 caracters");
                } else {
                    //TODO fer categoria
                    tasca = Tasca(title, deadline, description, completed, categories);
                    //log de prova
                    console.log(tasca.title);
                    //afegeix la nova tasca a l'array
                    singleton.llistaTasques.push(tasca);
                }
            }

        }
    console.log("le has dado click");
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
        clone.querySelector('label').textContent = tarea.texto
        clone.querySelectorAll('button')[0].dataset.id = tarea.id
        //console.log(tarea.id)
        fragment.appendChild(clone)
    })
    
    llistaCategory.appendChild(fragment)
}

//quan se li dona al delete button

const btnAccion = e => {
    if(e.target.classList.contains("BotoLlista")){
        delete category[e.target.dataset.id]
        pintarTareas()
        console.log(category)
    }else{
        delete category[e.target.dataset.id]
        pintarTareas()
        console.log()
    }
    e.stopPropagation()
}
import { Tasca } from "../model/Tasca";

export class Singleton {
    #observers = [];
    //Singleton te un array de tasques
    llistaTasques = Array(Tasca);

    //Afegir una nova tasca del formulari de TODO_form
    afegirTasca() {
        //log de prova
        console.log("1");
        form = document.getElementById("formulari");

        if (title === "" || deadline === ""  || description === "") {
            console.log("Falta informació sobre la tasca!");
            return;
        } else {
            //TODO fer categories
            tasca = Tasca(form.getElementById("title"), form.getElementById("deadline"), form.getElementById("description"), form.getElementById("completed"), categories);
            //log de prova
            console.log(tasca.title);
            //afegeix la nova tasca a l'array
            llistaTasques.push(tasca);
        }
    }

    //Cancelar la nova tasca del formulari de TODO_form i borrar el que havies escrit
    cancelarTasca() {
        form = document.getElementById("formulari");

        form.getElementById["title"].value = "";
        form.getElementById["description"].value = "";
        form.getElementById["deadline"].value = "";
    }

    

    addObserver(observer) {
        this.#observers.push(observer);
    }

    #notifyObservers() {
        this.#observers.forEach((observer) => observer.update())
    }

}
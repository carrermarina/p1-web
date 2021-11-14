import { Tasca } from "../model/Tasca";

export class Singleton {
    #observers = [];
    //Singleton te un array de tasques
    llistaTasques = Array(Tasca);

    //Afegir una nova tasca del formulari de TODO_form
    afegirTasca() {
        //log de prova
        console.log("1");

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
                    llistaTasques.push(tasca);
                }
            }

        }
    }

    //Cancelar la nova tasca del formulari de TODO_form i borrar el que havies escrit
    cancelarTasca() {
        form = document.getElementById("formulari2");

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
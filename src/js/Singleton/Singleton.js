import { Tasca } from "../model/Tasca";

export class Singleton {
    #observers = [];
    //singleton te un array de tasques
    #tasques = [Tasca];





    addObserver(observer) {
        this.#observers.push(observer);
    }

    #notifyObservers() {
        this.#observers.forEach((observer) => observer.update())
    }

}
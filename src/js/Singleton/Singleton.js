export class Singleton {
    #observers = [];
    // suposo que tambe te categories i tasques nidea






    addObserver(observer) {
        this.#observers.push(observer);
    }

    #notifyObservers() {
        this.#observers.forEach((observer) => observer.update())
    }

}
import {TODO_form} from "../TODO_form.html";

export class TascaForm {
    #container;

    #tascaFormNode;
    #tascaNameInputNodes = {};
    #tascaSubmitNode;

    #singleton;

    constructor(container, singleton) {
        this.#container = container;
        this.#singleton = singleton;
    }

    //quan li dones a accept, si has escrit guardes
    #addEventListenerToSubmitNode(node) {
        node.addEventListener("click", (event) => {
            event.preventDefault();
            let tascaName = this.#tascaNameInputNodes["input1"];
            let deadline = this.#tascaNameInputNodes["input2"];
            let description = this.#tascaNameInputNodes["input3"];
            let completed = this.#tascaNameInputNodes["input4"];

            // Guard clause. If tascaName is empty, don't do anything.
            if (tascaName === "" || deadline === ""  || description === "") {
                return;
            }

            let tasca = new tasca(title, deadline, description, completed, categories);
            this.#singleton.addtasca(tasca);

            this.#cleartascaForm();
        });
    }

    #cleartascaForm() {
        this.#tascaNameInputNodes["input"].value = "";
    }

    //part visual del formulari (crec que sha de fer aqui i no al todo form)
    render() {
        this.#tascaFormNode = document.createElement("form");
        this.#tascaFormNode.setAttribute("title", "create-tasca-form");

        //TITLE
        this.#tascaNameInputNodes["label1"] = document.createElement("label");
        this.#tascaNameInputNodes["label1"].setAttribute("for", "title");
        this.#tascaNameInputNodes["label1"].innerHTML = "tasca name: ";
        this.#tascaFormNode.appendChild(this.#tascaNameInputNodes["label1"]);

        this.#tascaNameInputNodes["input1"] = document.createElement("input");
        this.#tascaNameInputNodes["input1"].setAttribute("id", "title");
        this.#tascaNameInputNodes["input1"].setAttribute("name", "title");
        this.#tascaFormNode.appendChild(this.#tascaNameInputNodes["input1"]);
        this.#singleton.tasques.appendChild();


        //DEADLINE
        this.#tascaNameInputNodes["label2"] = document.createElement("label");
        this.#tascaNameInputNodes["label2"].setAttribute("for", "title");
        this.#tascaNameInputNodes["label2"].innerHTML = "tasca name: ";
        this.#tascaFormNode.appendChild(this.#tascaNameInputNodes["label1"]);

        this.#tascaNameInputNodes["input2"] = document.createElement("input");
        this.#tascaNameInputNodes["input2"].setAttribute("id", "title");
        this.#tascaNameInputNodes["input2"].setAttribute("name", "title");
        this.#tascaFormNode.appendChild(this.#tascaNameInputNodes["input2"]);

        //DESCRIPTION
        this.#tascaNameInputNodes["label3"] = document.createElement("label");
        this.#tascaNameInputNodes["label3"].setAttribute("for", "title");
        this.#tascaNameInputNodes["label3"].innerHTML = "tasca name: ";
        this.#tascaFormNode.appendChild(this.#tascaNameInputNodes["label1"]);

        this.#tascaNameInputNodes["input3"] = document.createElement("input");
        this.#tascaNameInputNodes["input3"].setAttribute("id", "title");
        this.#tascaNameInputNodes["input3"].setAttribute("name", "title");
        this.#tascaFormNode.appendChild(this.#tascaNameInputNodes["input2"]);

        //COMPLETED (ES UN BOTO QUE ES CLICA O NO)

        

        //part final, listener de submit/accept
        this.#tascaSubmitNode = document.createElement("input1");
        this.#tascaSubmitNode = document.createElement("input2");
        this.#tascaSubmitNode = document.createElement("input3");
        this.#tascaSubmitNode = document.createElement("input4");
        this.#tascaSubmitNode.setAttribute("type", "submit");
        this.#tascaSubmitNode.setAttribute("value", "Create");
        this.#addEventListenerToSubmitNode(this.#tascaSubmitNode);
        this.#tascaFormNode.appendChild(this.#tascaSubmitNode);
        
        this.#container.appendChild(this.#tascaFormNode);
    }
}
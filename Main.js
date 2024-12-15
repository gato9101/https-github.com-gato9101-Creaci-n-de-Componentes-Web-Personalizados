class Main extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:"open"});

        this.MainContainer = document.createElement("div");
        this.MainContainer.classList.add('Maincontainer');


        //Slots dinámicos
        const slot = document.createElement("slot");
        this.MainContainer.appendChild(slot);

        this.styleMainContainer = document.createElement("style");
        this.styleMainContainer.textContent = `
            .Maincontainer{
                background-color: black;
                color: white;
                text-shadow: 0 0 10px blueviolet;
                padding: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
            }
        `;

        this.shadowRoot.appendChild(this.styleMainContainer);
        this.shadowRoot.appendChild(this.MainContainer);
    }


}
window.customElements.define("main-elemento",Main);
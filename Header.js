class Header extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:"open"});

        this.HeaderContainer = document.createElement("div");
        this.HeaderContainer.classList.add('Headercontainer');

        this.styleHeaderContainer = document.createElement("style");
        this.styleHeaderContainer.textContent = `

            .Headercontainer{
                text-align: center;
                background-color: black;
                color: white;
                text-shadow: 0 0 10px lime;
                padding: 20px;
                margin-bottom: 20px;
            }
            
        `;

        this.shadowRoot.appendChild(this.styleHeaderContainer);
        this.shadowRoot.appendChild(this.HeaderContainer);
    }

    connectedCallback() {
        this.render();
    }

    render=()=>{
        this.h1 = document.createElement("h1");
        this.h1.textContent = "Creación de Componentes Web Personalizados";   

        this.HeaderContainer.appendChild(this.h1);
    }

}
window.customElements.define("header-elemento",Header);
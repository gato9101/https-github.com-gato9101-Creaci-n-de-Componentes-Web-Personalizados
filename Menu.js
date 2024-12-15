class Menu extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:"open"});

        this.MenuContainer = document.createElement("div");
        this.MenuContainer.classList.add('Menucontainer');

        this.styleMenuContainer = document.createElement("style");
        this.styleMenuContainer.textContent = `

            .Menucontainer{
                background-color: black;
                padding: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                border: 1px solid lime;
                border-radius: 20px;
            }

            .Menucontainer ul{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                list-style: none;
            }

            .Menucontainer a{
                color: white;
                text-decoration: none;
                text-shadow: 0 0 14px lime;
            }
                
        `;

        this.shadowRoot.appendChild(this.styleMenuContainer);
        this.shadowRoot.appendChild(this.MenuContainer);
    }

    connectedCallback() {
        const enlaceinicio = this.getAttribute("enlaceinicio")||"";
        const enlaceperfil = this.getAttribute("enlaceperfil")||"";
        const enlacegaleria = this.getAttribute("enlacegaleria")||"";
        
        this.render(enlaceinicio,enlaceperfil,enlacegaleria);
    }

    render = (enlaceinicio,enlaceperfil,enlacegaleria)=>{
        this.menu = document.createElement("ul");
        this.perfilref = document.createElement("a");
        this.inicioref = document.createElement("a");
        this.galeriaref = document.createElement("a");
        this.perfil = document.createElement("li");
        this.inicio = document.createElement("li");
        this.galeria = document.createElement("li");

        this.inicioref.href = enlaceinicio;
        this.perfilref.href = enlaceperfil;
        this.galeriaref.href = enlacegaleria;

        this.inicioref.textContent = "Inicio";
        this.perfilref.textContent = "Perfil";
        this.galeriaref.textContent = "Galería";

        this.inicio.appendChild(this.inicioref);
        this.perfil.appendChild(this.perfilref);
        this.galeria.appendChild(this.galeriaref);

        this.menu.appendChild(this.inicio);
        this.menu.appendChild(this.perfil);
        this.menu.appendChild(this.galeria);
        
        this.MenuContainer.appendChild(this.menu);
    }

}
window.customElements.define("menu-elemento",Menu);
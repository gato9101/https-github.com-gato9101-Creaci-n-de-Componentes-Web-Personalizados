class SocialProfile extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:"open"});

        this.SocialContainer = document.createElement("div");
        this.SocialContainer.classList.add('Socialcontainer');

        this.styleSocialContainer = document.createElement("style");
        this.styleSocialContainer.textContent = `
            .Socialcontainer{
                background-color: black;
                padding: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                display: flex;
                justify-content: center;
                color: white;
                text-shadow: 0 0 10px lime;
            }

            .Socialcontainer div{
                padding: 20px;
                border: 1px solid white;
                border-radius: 20px;
                box-shadow: 0 0 10px lime;
                text-align: center;
            }

            .Socialcontainer label{
                text-shadow: 0 0 10px cyan;
            }


        `;

        //Template
        this.template = document.createElement("template");
        this.template.innerHTML=`
            <div>
                <h2>Perfil ESPE</h2>
                <h3>Nombres:</h3>
                <label class="nombre"></label>
                <h3>Apellidos:</h3>
                <label class="apellido"></label>
                <h3>Descripción:</h3>
                <label class="descripcion"></label>
                <h3>Asignatura:</h3>
                <label class="asignatura"></label>
            </div>
        `;

        this.shadowRoot.appendChild(this.styleSocialContainer);
        this.shadowRoot.appendChild(this.SocialContainer);
    }

    connectedCallback() {
        this.render();      
    }

    render = ()=>{
        const perfil = this.template.content.cloneNode(true);
        const nombre = perfil.querySelector(".nombre");
        const apellido = perfil.querySelector(".apellido");
        const descripcion = perfil.querySelector(".descripcion");
        const asignatura = perfil.querySelector(".asignatura");

        nombre.textContent = "Luis Andres"
        apellido.textContent = "Lopez Mora"
        descripcion.textContent = "Estudiante de la Universidad de las Fuerzas Armadas ESPE";
        asignatura.textContent = "Programación Integrativa de Componentes WEB";
        
        this.SocialContainer.appendChild(perfil);
    }

}
window.customElements.define("social-elemento",SocialProfile);
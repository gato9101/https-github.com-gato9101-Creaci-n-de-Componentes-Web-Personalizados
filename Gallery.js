class Gallery extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:"open"});

        this.GalleryContainer = document.createElement("div");
        this.GalleryContainer.classList.add('Gallerycontainer');

        this.InputContainer = document.createElement("div");
        this.InputContainer.classList.add('Inputcontainer');

        this.styleGalleryContainer = document.createElement("style");
        this.styleGalleryContainer.textContent = `
            .Gallerycontainer{
                background-color: black;
                padding: 20px;
                margin-bottom: 20px;
                color: white;
                display:grid;
                grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
                gap: 20px;
            }

            .Gallerycontainer img{
                width: 200px;
            }

            .Gallerycontainer div{
                padding: 20px;
                border: 1px solid white;
                border-radius: 20px;
                text-align: center;
            }

            .Gallerycontainer h3{
                text-shadow: -1px -1px 6px lime;
                font-size: 1.8em;
            }

            .Gallerycontainer label{
                text-shadow: 0 0 4px yellow;
                font-size: 1.5em;

            }

            .Inputcontainer{
                background-color: black;
                padding: 20px;
                margin-top: 20px;
                color: white;
                font-size: 1.8em;
                text-align: center;
            }

            .Inputcontainer h3{
                text-shadow: 0 0 10px lime;
            }

            .Inputcontainer .ingreso input{
                width: 50%;
                padding: 10px;
                border: 1px solid white;
                border-radius: 20px;
            }

            .Inputcontainer .ingreso button{
                padding: 10px;
                border: 1px solid white;
                border-radius: 20px;
                background-color: lime;
                color: white;
                cursor: pointer;
            }

        `;

        //Template
        this.template = document.createElement("template");
        this.template.innerHTML=`
            <div>
                <img src="" alt="" class="imagen">
                <h3>Nombre: </h3>
                <label class="nombre"></label>
                <h3>Altura:</h3>
                <label class="altura"></label>
                <h3>Peso:</h3>
                <label class="peso"></label>
            </div>
        `;

        this.template2 = document.createElement("template");
        this.template2.innerHTML=`
            <div class="ingreso">
                <h3>¿Cuántos Pokemones quieres ver?</h3>
                <input class="input" type="number" min="1" max="1000">
                <button class="boton">Ver</button>
                <br>
                <br>
            </div>
        `;

        this.shadowRoot.appendChild(this.styleGalleryContainer);
        this.shadowRoot.appendChild(this.InputContainer);
        this.shadowRoot.appendChild(this.GalleryContainer);
    }

    connectedCallback() {
        const url = this.getAttribute("url");

        const ingreso = this.template2.content.cloneNode(true);
        const input = ingreso.querySelector(".input");
        const boton = ingreso.querySelector(".boton");

        boton.addEventListener("click",()=>{
            let numero = 1;

            if(parseInt(input.value) >= 1 && parseInt(input.value) <= 100){
                numero = parseInt(input.value)+1;
            }else{
                numero = 2;
            }

            this.GalleryContainer.innerHTML = "";
            for(let i=1;i<numero;i++){
                this.fetchData(`${url}${i}`);
            }
        });
        this.InputContainer.appendChild(ingreso);
    }

    fetchData = async (url)=>{
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error("Se presentó un error al procesar la petición fetch: ", error);
        }

    }

    render = (pk)=>{
        const elemento = this.template.content.cloneNode(true);
        const imagen = elemento.querySelector(".imagen");
        const nombre = elemento.querySelector(".nombre");
        const altura = elemento.querySelector(".altura");
        const peso = elemento.querySelector(".peso");

        imagen.src = pk.sprites.other.home.front_default;
        nombre.textContent = pk.name;
        altura.textContent = `${(pk.height/10)} m`;
        peso.textContent = `${pk.weight/10} kg`;

        this.GalleryContainer.appendChild(elemento);
    }

}
window.customElements.define("gallery-elemento",Gallery);
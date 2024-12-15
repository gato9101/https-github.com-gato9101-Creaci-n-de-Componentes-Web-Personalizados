class CustomTable extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:"open"});

        this.TableContainer = document.createElement("div");
        this.TableContainer.classList.add('Tablecontainer');

        this.styleTableContainer = document.createElement("style");
        this.styleTableContainer.textContent = `
            .Tablecontainer{
                background-color: black;
                padding: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                display: flex;
                justify-content: center;
                color: white;
                overflow: scroll;
            }

            .Tablecontainer table{
                width: 100%;
            }

            .Tablecontainer th{
                text-align: center;
                text-shadow: 0 0 10px lime;
            }

            .Tablecontainer td{
                text-shadow: 0 0 10px blue;
            }

            .Tablecontainer td,
            .Tablecontainer th{
                padding: 10px;
                border: 1px solid white;
            }
            
        `;

        //Template
        this.template = document.createElement("template");
        this.template.innerHTML=`
            <table>
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Nombre Usuario</th>
                    <th>Sitio web</th>
                    <th>Email</th>
                    <th>Ciudad</th>
                    <th>Compañía</th>
                </thead>
                <tbody class="datos">

                </tbody>
            </table>
        `;

        this.shadowRoot.appendChild(this.styleTableContainer);
        this.shadowRoot.appendChild(this.TableContainer);
    }

    connectedCallback() {
        const url = this.getAttribute("url");
        this.fetchData(url);
    }

    fetchData = async (url)=>{
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.render(data);
            
        } catch (error) {
            console.error("Se presentó un error al procesar la petición fetch: ", error);            
        }
    };

    render = (users)=>{
        const tabla = this.template.content.cloneNode(true);
        const body = tabla.querySelector(".datos");
        
        users.forEach((usuario)=>{
            const registro = document.createElement("tr");
            const id = document.createElement("td");
            id.textContent = usuario.id;
            const nombre = document.createElement("td");
            nombre.textContent = usuario.name;
            const Telefono = document.createElement("td");
            Telefono.textContent = usuario.phone;
            const nombreu = document.createElement("td");
            nombreu.textContent = usuario.username;
            const Sitio = document.createElement("td");
            Sitio.textContent = usuario.website;
            const email = document.createElement("td");
            email.textContent = usuario.email;
            const Ciudad = document.createElement("td");
            Ciudad.textContent = usuario.address.city;
            const Compania = document.createElement("td");
            Compania.textContent = usuario.company.name;


            registro.appendChild(id);
            registro.appendChild(nombre);
            registro.appendChild(Telefono);
            registro.appendChild(nombreu);
            registro.appendChild(Sitio);
            registro.appendChild(email);
            registro.appendChild(Ciudad);
            registro.appendChild(Compania);

            body.appendChild(registro);
        });
        
        this.TableContainer.appendChild(tabla);
        
    }

}
window.customElements.define("table-elemento",CustomTable);
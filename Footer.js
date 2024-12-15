class Footer extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:"open"});

        this.FooterContainer = document.createElement("div");
        this.FooterContainer.classList.add('Footercontainer');

        this.styleFooterContainer = document.createElement("style");
        this.styleFooterContainer.textContent = `
            .Footercontainer{
                text-align: center;
                background-color: black;
                color: white;
                text-shadow: 0 0 10px lime;
                padding: 20px;
                margin-top: 20px;
            }

            .Footercontainer img{
                width: 40px;
            }

            .Footercontainer div{
                display: flex;
                align-items: center;
                justify-content: space-evenly;
            }
        `;

        this.shadowRoot.appendChild(this.styleFooterContainer);
        this.shadowRoot.appendChild(this.FooterContainer);
    }

    connectedCallback() {
        this.render();
    }

    render = ()=>{
        this.nombre = document.createElement("h3");
        this.copyr = document.createElement("p");
        this.div = document.createElement("div");
        this.facebook = document.createElement("img");
        this.LinkedIn = document.createElement("img");
        this.YouTube = document.createElement("img");

        this.facebook.src="https://static.vecteezy.com/system/resources/previews/016/716/447/non_2x/facebook-icon-free-png.png";
        this.facebook.alt="ImagenFacebook";
        this.LinkedIn.src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png";
        this.LinkedIn.alt="ImagenLinkedIn";
        this.YouTube.src="https://iconape.com/wp-content/files/cm/286303/svg/youtube-icon-logo-logo-icon-png-svg.png";
        this.YouTube.alt="ImagenYouTube";

        this.enlacefacebook = document.createElement("a");
        this.enlacefacebook.href="https://es-la.facebook.com/";
        this.enlaceLinkedIn = document.createElement("a");
        this.enlaceLinkedIn.href="https://www.linkedin.com/";
        this.enlaceYouTube = document.createElement("a");
        this.enlaceYouTube.href="https://www.youtube.com/";


        this.enlacefacebook.appendChild(this.facebook);
        this.enlaceLinkedIn.appendChild(this.LinkedIn);
        this.enlaceYouTube.appendChild(this.YouTube);

        this.div.appendChild(this.enlacefacebook);
        this.div.appendChild(this.enlaceLinkedIn);
        this.div.appendChild(this.enlaceYouTube);

        this.nombre.textContent = "Andres Lopez";
        this.copyr.innerHTML = `
            Copyright &copy; 2024 Andres Lopez
        `;

        this.FooterContainer.appendChild(this.div);
        this.FooterContainer.appendChild(this.nombre);
        this.FooterContainer.appendChild(this.copyr);        
    }

}
window.customElements.define("footer-elemento",Footer);
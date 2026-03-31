import React from "react";
import './home.css';

const Home = () => {
    return(
        <div className="home">
            <div className="container">
                <div className="container-title">
                    <div className="container-logo">
                        <img src="/primavera-borboleta1.png" alt="Logo Rede Primavera" />
                        <div className="logo-text"></div>
                    </div>
                    <h1>Avalie nossas unidades</h1>
                    <div className="after-title"></div>
                    <p>Sua opinião faz a diferença! Escolha uma unidade e compartilhe sua experiência para ajudar outros pacientes e melhorar nossos serviços.</p>
                </div>

        
                <div className="cards">
                    <div className="card">
                        
                        <a href="https://www.google.com/search?q=hospital+primavera&sca_esv=82b7bac21a739727&rlz=1C1UEAD_enBR1185BR1185&sxsrf=ANbL-n4d3QC9jrna1b4UDTUWa8ANqZGFPg%3A1774616119269&ei=N37GacuIEO6C5OUP9Kqr-QQ&biw=1280&bih=889&ved=0ahUKEwiLgJubkMCTAxVuAbkGHXTVKk8Q4dUDCBE&uact=5&oq=hospital+primavera&gs_lp=Egxnd3Mtd2l6LXNlcnAiEmhvc3BpdGFsIHByaW1hdmVyYTIKECMYgAQYJxiKBTIKECMY8AUYJxjJAjIWEC4YgAQYsQMYFBjHARiHAhiOBRivATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMg4QLhiABBjHARiOBRivATIFEAAYgAQyJRAuGIAEGLEDGBQYxwEYhwIYjgUYrwEYlwUY3AQY3gQY4ATYAQFIyCtQ0whYiyhwBHgBkAEAmAHCAaABqBqqAQQwLjE5uAEDyAEA-AEBmAIXoAKlG8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIcEC4YgAQYsAMYQxjHARjIAxiKBRiOBRivAdgBAcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAhYQLhiABBixAxhDGMcBGIoFGI4FGK8BwgIKEAAYgAQYQxiKBcICExAuGIAEGEMYxwEYigUYjgUYrwHCAhEQLhiABBixAxjHARiOBRivAcICDRAAGIAEGLEDGEMYigXCAhYQLhiABBixAxgUGIcCGMcBGI4FGK8BwgIUEC4YgAQYsQMYgwEYxwEYjgUYrwHCAgsQABiABBiSAxiKBcICCxAuGIAEGMcBGK8BmAMAiAYBkAYUugYGCAEQARgIkgcENC4xOaAHvfUCsgcEMC4xObgHjhvCBwgwLjMuMTguMsgHY4AIAA&sclient=gws-wiz-serp#lrd=0x71ab30f22e6bc4b:0xa1b9922b2b368657,3,,,," target="_blank"><img src="/hp-pic1.jpg" alt="" /><p>Hospital Primavera <br />Unidade Jardins</p></a>
                    </div>

                    <div className="card">
                        <a href="https://www.google.com/search?q=hospital+do+cora%C3%A7%C3%A3o&rlz=1C1UEAD_enBR1185BR1185&oq=hospital+do+cora%C3%A7%C3%A3o&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhAIARAuGK8BGMcBGIAEGI4FMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMhAIBxAuGK8BGMcBGIAEGI4FMgcICBAAGIAEMgcICRAAGIAE0gEIMzU0N2owajmoAgawAgHxBYTK8HY9g7LA&sourceid=chrome&ie=UTF-8&lqi=ChVob3NwaXRhbCBkbyBjb3Jhw6fDo29I6dHngOeAgIAIWiMQABABEAIYABgBGAIiFWhvc3BpdGFsIGRvIGNvcmHDp8Ojb5IBBmRvY3RvcpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSMU9GcE1jbWhCUlJBQvoBBAgAEBM#rlimm=18118924394337630017&lrd=0x71ab3822df7cde1:0xfb7359bd0ca77741,3,,,," target="_blank"><img src="/hcor-pic1.jpeg" alt="" /><p>Hospital primavera<br /> Unidade São José</p></a>
                    </div>

                    <div className="card">
                        <a href="https://www.google.com/search?q=diagnose+rua+campos&rlz=1C1UEAD_enBR1185BR1185&oq=diagnose+rua+campos&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIbCAEQLhhDGIMBGK8BGMcBGLEDGIAEGIoFGI4FMgwIAhAAGEMYgAQYigUyDAgDEAAYQxiABBiKBTISCAQQLhhDGK8BGMcBGIAEGIoFMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAE0gEIMjU3MGowajmoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x71ab39d2833f6c3:0x204ed7908af530aa,3,,,," target="_blank"><img src="/campos-pic.jpeg" alt="" /><p>Diagnose Rua Campos</p></a>
                    </div>

                    <div className="card">
                        <a href="https://www.google.com/search?q=diagnose+barao+de+maruim&rlz=1C1UEAD_enBR1185BR1185&oq=diagnose+barao+de+maruim&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQLhivARjHARiABDIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCggGEAAYgAQYogQyCggHEAAYogQYiQUyBwgIEAAY7wXSAQg1NjA3ajBqOagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x71ab3fa63df8a55:0xff47074106034869,3,,,," target="_blank"><img src="/barao-pic.jpg" alt="" /><p>Diagnose Barão de Maruim</p></a>
                    </div>

                    <div className="card">
                        <a href="https://www.google.com/search?q=policlin+augusto+franco&rlz=1C1UEAD_enBR1185BR1185&oq=policlin+augusto+franco&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEIMzQ5OWowajBqOagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x71ab10d4cd75f5f:0x2ff59de2e17d81f0,3,,,," target="_blank"><img src="/augusto-franco-pic.jpg" alt="" /><p>Policlin Augusto Franco</p></a>
                    </div>

                    <div className="card">
                        <a href="https://www.google.com/search?q=policlin+siqueira+campos&rlz=1C1UEAD_enBR1185BR1185&oq=policlin+siqueira+campos&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQg0MTA4ajBqOagCBrACAfEFCgk8EAYdcIo&sourceid=chrome&ie=UTF-8#lrd=0x71ab30f22e8c0fd:0x2a34c9c5c8c7d8c,3,,,," target="_blank"><img src="/siqueira-pic.jpg" alt="" /><p>Policlin Siqueira Campos</p></a>
                    </div>


                    <div className="card">
                        <a href="https://www.google.com/search?q=policlin+itabaiana&rlz=1C1UEAD_enBR1185BR1185&oq=policlin+itabaiana&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yBwgHEAAY7wUyBwgIEAAY7wUyBwgJEAAY7wXSAQg0MTM4ajBqOagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x70ffa87e917babb:0x1e672661e28948ea,3,,,," target="_blank"><img src="/itabaiana-pic.jpg" alt="" /><p>Policlin Itabaiana</p></a>
                    </div>

                    <div className="card">
                        <a href="https://www.google.com/search?q=policlin+itabaiana&rlz=1C1UEAD_enBR1185BR1185&oq=policlin+itabaiana&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yBwgHEAAY7wUyBwgIEAAY7wUyBwgJEAAY7wXSAQg0MTM4ajBqOagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x70ffa87e917babb:0x1e672661e28948ea,3,,,," target="_blank"><img src="/alameda-pic1.jpg" alt="" /><p>Hospital Primavera<br /> Clínica Alameda</p></a>
                    </div>
                </div>


            </div>
            
        </div>
    )
 }

 export default Home;
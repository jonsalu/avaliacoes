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
                        
                        <a href="https://search.google.com/local/writereview?placeid=ChIJS7zmIg-zGgcRV4Y2KyuSuaE" target="_blank"><img src="/hp-pic1.jpg" alt="" /><p>Hospital Primavera <br />Unidade Jardins</p></a>
                    </div>

                    <div className="card">
                        <a href="https://search.google.com/local/writereview?placeid=ChIJ4c33LYKzGgcRQXenDL1Zc_s" target="_blank"><img src="/hcor-pic1.jpeg" alt="" /><p>Hospital primavera<br /> Unidade São José</p></a>
                    </div>

                    <div className="card">
                        <a href="https://search.google.com/local/writereview?placeid=ChIJw_YzKJ2zGgcRqjD1ipDXTiA" target="_blank"><img src="/campos-pic.jpeg" alt="" /><p>Diagnose Rua Campos</p></a>
                    </div>

                    <div className="card">
                        <a href="https://search.google.com/local/writereview?placeid=ChIJVYrfY_qzGgcRaUgDBkEHR_8" target="_blank"><img src="/barao-pic.jpg" alt="" /><p>Diagnose Barão de Maruim</p></a>
                    </div>

                    <div className="card">
                        <a href="https://search.google.com/local/writereview?placeid=ChIJX1_XTA2xGgcR8IF94eKd9S8" target="_blank"><img src="/augusto-franco-pic.jpg" alt="" /><p>Policlin Augusto Franco</p></a>
                    </div>

                    <div className="card">
                        <a href="https://search.google.com/local/writereview?placeid=ChIJ_cDoIg-zGgcRjH2MXJxMowI" target="_blank"><img src="/siqueira-pic.jpg" alt="" /><p>Policlin Siqueira Campos</p></a>
                    </div>


                    <div className="card">
                        <a href="https://search.google.com/local/writereview?placeid=ChIJu7oX6Yf6DwcR6kiJ4mEmZx4" target="_blank"><img src="/itabaiana-pic.jpg" alt="" /><p>Policlin Itabaiana</p></a>
                    </div>

                    <div className="card">
                        <a href="https://search.google.com/local/writereview?placeid=ChIJdQX640-zGgcRj7OA3XAk_2M" target="_blank"><img src="/alameda-pic1.jpg" alt="" /><p>Hospital Primavera<br /> Clínica Alameda</p></a>
                    </div>
                </div>


            </div>
            
        </div>
    )
 }

 export default Home;
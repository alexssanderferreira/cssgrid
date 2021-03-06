import React from "react";
import './Destaques.css'
import './DestaquesRespon.css'

export default () => {
    return(
        <section class="destaques">
            <div class="destaques__principal caixa">
                <h3 class="destaques__titulo">Fortnite</h3>
            </div>
            <div class="destaques__secundario caixa">
                <h3 class="destaques__titulo">PUBG</h3>
            </div>
            <div class="destaques__secundario caixa">
                <h3 class="destaques__titulo">Slack</h3>
            </div>
            <div class="destaques__secundario caixa">
                <h3 class="destaques__titulo">Whatsapp</h3>
            </div>
            <div class="destaques__secundario caixa">
                <h3 class="destaques__titulo">CS: GO</h3>
            </div>
            <div class="destaques__categorias">
                <ul class="destaques__categorias___lista">
                    <li class="destaques__categorias___item">
                        <a class="destaques__categorias___link" href="#">
                            <i class="destaques__categorias___icone fab fa-buromobelexperte"></i>
                            Aplicativos populares
                        </a>
                    </li>
                    <li class="destaques__categorias___item">
                        <a class="destaques__categorias___link" href="#">
                            <i class="fas fa-list-ol"></i>
                            Jogos populares
                        </a>
                    </li>
                    <li class="destaques__categorias___item">
                        <a class="destaques__categorias___link" href="#">
                            <i class="far fa-star"></i>
                            Em Destaque
                        </a>
                    </li>
                    <li class="destaques__categorias___item">
                        <a class="destaques__categorias___link" href="#">
                            <i class="far fa-bell"></i>
                            Lan??amentos
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
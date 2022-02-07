import React from "react";
import './Header.css'
import { BsFillHouseFill } from "react-icons/bs";
import { FaMobileAlt,FaGamepad } from "react-icons/fa";

export default () => {
    return(
        <nav class="menu">
            <ul class="menu__lista">
                <li class="menu__item">
                    <a class="menu__link ativo" href="#">
                        <BsFillHouseFill/>
                        Início
                    </a>
                    <a class="menu__link" href="#">
                        <FaMobileAlt/>
                        Aplicativos</a>
                    <a class="menu__link" href="#">
                        <FaGamepad/>
                        Jogos
                    </a>
                </li>
            </ul>
        </nav>
 )
}
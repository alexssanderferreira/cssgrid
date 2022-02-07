import React from "react";
import './Populares.css'
import { BsGrid3X3Gap,BsGrid3X3GapFill } from "react-icons/bs";

export default () => {
    return(
        <section class="populares">
            <div class="populares__itens">
                <div class="populares__info">
                    <div class="populares__cabecalho">
                        <h4 class="populares__titulo">
                            <BsGrid3X3Gap class="populares__icone"/>
                            Aplicativos populares
                        </h4>
                        <button class="populares__botao">
                            <BsGrid3X3GapFill class="populares__icone"/>
                            Visualizar todos
                        </button>
                    </div>
                </div>
                <div class="populares__conteudo">
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/slack.png"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Slack</h5>
                                <time class="populares__card___data" datetime="2013-08-01">08/2013</time>
                            </div>
                            <div class="populares__card___descricao">
                                Traduzido do inglês-O Slack é um conjunto baseado em nuvem de ferramentas e serviços proprietários de colaboração em equipe, fundado por Stewart Butterfield. O Slack começou como uma ferramenta interna usada por sua empresa, Tiny Speck, no desenvolvimento do Glitch, um jogo online agora extinto.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/whatsapp.png"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Whatsapp</h5>
                                <time class="populares__card___data" datetime="20090-01-01">2009</time>
                            </div>
                            <div class="populares__card___descricao">
                                WhatsApp é um aplicativo multiplataforma de mensagens instantâneas e chamadas de voz para smartphones. Além de mensagens de texto, os usuários podem enviar imagens, vídeos e documentos em PDF, além de fazer ligações grátis por meio de uma conexão com a internet.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/telegram.jpeg"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Telegram</h5>
                                <time class="populares__card___data" datetime="2013-08-14">14/08/2013</time>
                            </div>
                            <div class="populares__card___descricao">
                                O Telegram é um serviço de mensagens instantâneas baseado na nuvem. O Telegram está disponível para smartphones ou tablets, computadores e também como Aplicação web. Os usuários podem enviar mensagens e trocar fotos, vídeos, stickers e arquivos de qualquer tipo.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/trello.jpg"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Trello</h5>
                                <time class="populares__card___data" datetime="2011-01-01">2011</time>
                            </div>
                            <div class="populares__card___descricao">
                                Trello é um aplicativo de gerenciamento de projeto baseado na web originalmente feito por Fog Creek Software em 2011. Em 2014 tornou-se uma empresa. Ele opera um modelo de negócio Freemium, no qual é disponibilizado a versão gratuita ou paga para o usuário.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/skype.png"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Skype</h5>
                                <time class="populares__card___data" datetime="2003-08-01">08/2003</time>
                            </div>
                            <div class="populares__card___descricao">
                                Skype é um software que permite comunicação pela Internet através de conexões de voz e vídeo, criado por Janus Friis e Niklas Zennstrom. O Skype foi lançado no ano de 2003. Em 2005 foi vendido para a empresa eBay e pertence, desde maio de 2011, à Microsoft.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="populares__itens">
                <div class="populares__info">
                    <div class="populares__cabecalho">
                        <h4 class="populares__titulo">
                            <i class="populares__icone fas fa-list-ol"></i>
                            Jogos populares
                        </h4>
                        <button class="populares__botao">
                            <i class="fas fa-th"></i>
                            Visualizar todos
                        </button>
                    </div>
                </div>
                <div class="populares__conteudo">
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/fortnite.jpg"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Fornite</h5>
                                <time class="populares__card___data" datetime="2017-07-25">25/07/2017</time>
                            </div>
                            <div class="populares__card___descricao">
                                Fortnite é um jogo eletrônico online criado em 2017, desenvolvido pela Epic Games, e lançado como diferentes pacotes de software com diferentes modos de jogo que compartilham a mesma jogabilidade e motor gráfico de jogo.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/pubg.jpg"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">PUBG</h5>
                                <time class="populares__card___data" datetime="2017-03-23">23/03/2017</time>
                            </div>
                            <div class="populares__card___descricao">
                                PlayerUnknown's Battlegrounds, ou somente Battlegrounds, é um jogo eletrônico multiplayer desenvolvido pela PUBG Corp., subsidiária da produtora coreana Bluehole, utilizando o motor de jogo Unreal Engine 4
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/cs-go.jpg"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">CS: GO</h5>
                                <time class="populares__card___data" datetime="2012-08-21">21/08/2012</time>
                            </div>
                            <div class="populares__card___descricao">
                                Counter-Strike: Global Offensive é um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/lol.jpg"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">League of Legends</h5>
                                <time class="populares__card___data" datetime="2009-10-27">27/10/2009</time>
                            </div>
                            <div class="populares__card___descricao">
                                League of Legends é um jogo eletrônico do gênero multiplayer online battle arena, desenvolvido e publicado pela Riot Games para Microsoft Windows e Mac OS X. É um jogo gratuito para jogar e inspirado no modo Defense of the Ancients de Warcraft III: The Frozen Throne.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/gta-v.jpg"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Grand Theft Auto V</h5>
                                <time class="populares__card___data" datetime="2013-09-17">17/09/2013</time>
                            </div>
                            <div class="populares__card___descricao">
                                Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="populares__itens">
                <div class="populares__info">
                    <div class="populares__cabecalho">
                        <h4 class="populares__titulo">
                            <i class="populares__icone far fa-star"></i>
                            Em Destaque
                        </h4>
                        <button class="populares__botao">
                            <i class="fas fa-th"></i>
                            Visualizar todos
                        </button>
                    </div>
                </div>
                <div class="populares__conteudo">
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/fortnite.jpg"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Fornite</h5>
                                <time class="populares__card___data" datetime="2017-07-25">25/07/2017</time>
                            </div>
                            <div class="populares__card___descricao">
                                Fortnite é um jogo eletrônico online criado em 2017, desenvolvido pela Epic Games, e lançado como diferentes pacotes de software com diferentes modos de jogo que compartilham a mesma jogabilidade e motor gráfico de jogo.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/pubg.jpg"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">PUBG</h5>
                                <time class="populares__card___data" datetime="2017-03-23">23/03/2017</time>
                            </div>
                            <div class="populares__card___descricao">
                                PlayerUnknown's Battlegrounds, ou somente Battlegrounds, é um jogo eletrônico multiplayer desenvolvido pela PUBG Corp., subsidiária da produtora coreana Bluehole, utilizando o motor de jogo Unreal Engine 4
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/slack.png"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Slack</h5>
                                <time class="populares__card___data" datetime="2013-08-01">08/2013</time>
                            </div>
                            <div class="populares__card___descricao">
                                Traduzido do inglês-O Slack é um conjunto baseado em nuvem de ferramentas e serviços proprietários de colaboração em equipe, fundado por Stewart Butterfield. O Slack começou como uma ferramenta interna usada por sua empresa, Tiny Speck, no desenvolvimento do Glitch, um jogo online agora extinto.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/whatsapp.png"/>
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Whatsapp</h5>
                                <time class="populares__card___data" datetime="20090-01-01">2009</time>
                            </div>
                            <div class="populares__card___descricao">
                                WhatsApp é um aplicativo multiplataforma de mensagens instantâneas e chamadas de voz para smartphones. Além de mensagens de texto, os usuários podem enviar imagens, vídeos e documentos em PDF, além de fazer ligações grátis por meio de uma conexão com a internet.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/cs-go.jpg"/> 
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">CS: GO</h5>
                                <time class="populares__card___data" datetime="2012-08-21">21/08/2012</time>
                            </div>
                            <div class="populares__card___descricao">
                                Counter-Strike: Global Offensive é um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="populares__itens">
                <div class="populares__info">
                    <div class="populares__cabecalho">
                        <h4 class="populares__titulo">
                            <i class="populares__icone far fa-bell"></i>
                            Lançamentos
                        </h4>
                        <button class="populares__botao">
                            <i class="fas fa-th"></i>
                            Visualizar todos
                        </button>
                    </div>
                </div>
                <div class="populares__conteudo">
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/brawl-stars.jpg"/> 
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Brawl Stars</h5>
                                <time class="populares__card___data" datetime="2017-06-15">15/06/2017</time>
                            </div>
                            <div class="populares__card___descricao">
                                Traduzido do inglês-Brawl Stars é um jogo multiplayer de arena e jogos de luta livre, desenvolvido e publicado pela Supercell. Em 14 de junho de 2017, a Supercell anunciou o jogo por meio de um vídeo de transmissão ao vivo no YouTube.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/organizze.jpeg"/> 
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Organizze</h5>
                                <time class="populares__card___data" datetime="">Não definida</time>
                            </div>
                            <div class="populares__card___descricao">
                                Usado por mais de 1 milhão de pessoas, o Organizze é uma ferramenta online que vai facilitar sua vida financeira.  
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/onefotball.jpeg"/> 
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Onefootball</h5>
                                <time class="populares__card___data" datetime="2008-01-01">2008</time>
                            </div>
                            <div class="populares__card___descricao">
                                Onefootball é a melhor plataforma para os fãs de futebol de todo o mundo. Das notícias às pontuações e estatísticas - Contamos as histórias de futebol do mundo, trazidas a você por mais de 150 entusiastas do coração de Berlim!
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/free-fire.jpg"/> 
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Free Fire</h5>
                                <time class="populares__card___data" datetime="2017-11-01">01/11/2017</time>
                            </div>
                            <div class="populares__card___descricao">
                                Garena Free Fire é um jogo eletrônico mobile de ação-aventura do gênero battle royale, desenvolvido pela 111dots Studio e publicado pela Garena. O jogo obteve um beta aberto em novembro de 2017 e foi lançado oficialmente para Android e iOS em 4 de dezembro de 2017.
                            </div>
                        </div>
                    </div>
                    <div class="populares__card">
                        <img class="populares__card___imagem" src="/images/mario-kart.jpg"/> 
                        <div class="populares__card___corpo">
                            <div class="populares__card___cabecalho">
                                <h5 class="populares__card___titulo">Super Mario Racing</h5>
                                <time class="populares__card___data" datetime="">Não definida</time>
                            </div>
                            <div class="populares__card___descricao">
                                Jogo Super Mario Racing. Escolha seu personagem preferido do Universo do Super Mario e depois é só acelerar!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
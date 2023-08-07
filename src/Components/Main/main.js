import React from "react";
import * as S from "./main_style.js";
import Ovo1 from "../imagem/ovo1.png";
import Ovo2 from "../imagem/ovo2.png";
import Ovo3 from "../imagem/ovo3.png";
import Ovo4 from "../imagem/ovo4.png";
import Ovo5 from "../imagem/ovo5.png";
import Ovo6 from "../imagem/ovo6.png";
import open from "../imagem/open.png";
import copacabana from "../imagem/copacabana.png";
import vila from "../imagem/vila.png";
import what from "../imagem/what.png";


export default function Main() {
  

  return (
    <>
      <S.Main id="main">
        <S.Ovos>
          <S.Opçoes>
            <img src={Ovo1} alt="imagem de ovo de pascoa" />
            <p>Ovos de colher Tradicional a partir de 250g</p>
            <button>Encomendar<img src={what} alt="icone do logo do whatsapp"/></button>
          </S.Opçoes>
          <S.Span>
            <span> 10% de desconto</span>
            <S.Opçoes>
              <img src={Ovo2} alt="imagem de ovo de pascoa" />
              <p>Ovos de colher Especiais a partir de 350g</p>
              <button>Encomendar<img src={what} alt="icone do logo do whatsapp"/></button>
            </S.Opçoes>
          </S.Span>
          <S.Span>
            <span> 12% de desconto</span>
            <S.Opçoes>
              <img src={Ovo3} alt="imagem de ovo de pascoa" />
              <p> Cesta de Chocolate monte você mesmo.</p>
              <button>Encomendar<img src={what} alt="icone do logo do whatsapp"/></button>
            </S.Opçoes>
          </S.Span>
          <S.Span>
            <span> 5% de desconto</span>
            <S.Opçoes>
              <img src={Ovo4} alt="imagem de ovo de pascoa" />
              <p> Ovos coloridos para brincar com a criançada.</p>
              <button>Encomendar<img src={what} alt="icone do logo do whatsapp"/></button>
            </S.Opçoes>
          </S.Span>
          <S.Opçoes>
            <img src={Ovo5} alt="imagem de ovo de pascoa" />
            <p> Kit de Trufas a partir de 12 unidades </p>
            <button>Encomendar<img src={what} alt="icone do logo do whatsapp"/></button>
          </S.Opçoes>
          <S.Opçoes>
            <img src={Ovo6} alt="imagem de ovo de pascoa" />
            <p> Barra de Chocolate crocontes</p>
            <button>Encomendar<img src={what} alt="icone do logo do whatsapp"/></button>
          </S.Opçoes>
        </S.Ovos>
      </S.Main>

      <S.Secondbox id="local">
        <S.Endereco>
          <img src={open} alt="imagem de ovo de pascoa" />
          <h3>LARANJEIRAS</h3>
          <p>
            Seg 11h às 19h
            <br /> Ter a Sexta 9h às 20h
            <br /> Sáb e Dom 10h às 19h{" "}
          </p>
          <h4>Rua Ipiranga, 132 - Laranjeiras, Rio de Janeiro</h4>
        </S.Endereco>
        <S.Endereco>
          <img src={copacabana} alt="imagem de ovo de pascoa" />
          <h3>COPACABANA</h3>
          <p>
            Seg 11h às 19h
            <br /> Ter a Sexta 10h às 21h
            <br /> Sáb e Dom 11h às 20h{" "}
          </p>
          <h4>Av. Nossa Sra. de Copacabana, 978 - Rio de Janeiro</h4>
        </S.Endereco>
        <S.Endereco>
          <img src={vila} alt="imagem de ovo de pascoa" />
          <h3>VILA MADALENA</h3>
          <h5>Segunda a Sábado 10 às 18h </h5>
          <h4>Av. Brg. Faria Lima, 2232 - Jardim Paulistano, São Paulo</h4>
        </S.Endereco>
      </S.Secondbox>

      <S.Boxform id="contato">
        <p>Contato</p>
        <input id="name" type="text" name="name" placeholder="Nome" required />
        <S.Boxinput>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <input type="tel" placeholder="Telefone" />
        </S.Boxinput>
        <input id="name" type="text" name="name" placeholder="Assunto" />
        <input
          className="inputmensagem"
          id="name"
          type="text"
          name="name"
          placeholder="Mensagem"
        />
        <button type="submit">ENVIAR</button>
      </S.Boxform>
    </>
  );
}

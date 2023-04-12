import React from "react";
import * as S from "./footer_style.js";
import logo from "../imagem/logo.png";
import face from "../imagem/face.png";
import twitter from "../imagem/twitter.png";
import insta from "../imagem/insta.png";
export default function Footer() {
  return (
    <S.Footer>
      <S.Secondelogo>
        <img src={logo} alt="imagem da logo no roda pé da pagina" />
        <h2>Doce Lar</h2>
      </S.Secondelogo>

      <S.Icones>
        <a
          href="https://pt-br.facebook.com/login/device-based/regular/login/"
          target="_blank"
        >
          <img src={face} alt="icone do facebook" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src={twitter} alt="icone do twitter" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={insta} alt="icone do instagram" />
        </a>
      </S.Icones>
    </S.Footer>
  );
}

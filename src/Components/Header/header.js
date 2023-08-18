import React from "react";
import * as S from "./header_style.js";
import logo from "../imagem/logo.png";

export default function Header() {
  return (
    <>
      <S.Header>
        <div>
          <img src={logo} alt="imagem da logo no inicio da pagina" />
          <h2>Doce Lar</h2>
        </div>
        <S.NavBox>
          <ul>
            <li><a className="linha" href="#main">PRODUTOS</a></li>
            <li><a href="#local">ONDE ENCONTRAR</a></li>
            <li><a href="#contato">CONTATO</a></li>
          </ul>
        </S.NavBox>
        <S.Hamburg>
        <div className="dropdown">
         <a className="fa" href="#">&#8801;</a>
            <div className="dropdown-content">
              <a href="#main">PRODUTOS</a>
              <a href="#local">ONDE ENCONTRAR</a>
              <a href="#contato">CONTATO</a>
            </div>
            </div>
          </S.Hamburg>
      </S.Header>
      <S.Section>
        <p>Cada produto feito artesanalmente</p>
      </S.Section>
    </>
  );
}
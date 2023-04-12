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
            <p>PRODUTOS</p>
            <li>ONDE ENCONTRAR</li>
            <li>CONTATO</li>
          </ul>
        </S.NavBox>
      </S.Header>
      <S.Section>
        <p>Cada produto feito artesanalmente</p>
        <S.ButtonBox>
          <S.BD></S.BD>
          <S.BE></S.BE>
        </S.ButtonBox>
      </S.Section>
    </>
  );
}
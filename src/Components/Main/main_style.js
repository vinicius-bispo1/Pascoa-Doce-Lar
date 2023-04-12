import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;

export const Main = styled.div`
  width: 100%;
  height: 140vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  /* border: 1px solid gray; */
  width: 18vw;
  height: 51vh;
  margin-bottom: 23px;
  span {
    border: 1px solid orange;
    border-radius: 10px 10px 0 0;
    margin-left: 1vw;
    width: 9.8vw;
    height: 4.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f28705;
    color: white;
    font-family: "inter", sans-serif;
    font-size: 15px;
  }
`;

export const Opçoes = styled.div`
  width: 18vw;
  height: 45vh;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  p {
    width: 12.7vw;
    height: 6vh;
    font-family: "inter", sans-serif;
  }

  button {
    width: 8vw;
    height: 5vh;
    background-color: #f2b705;
    border: none;
    cursor: pointer;
    font-weight: bolder;
    font-family: "inter", sans-serif;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.33);
  }
`;

export const Ovos = styled.div`
  width: 75vw;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 90px;
`;

export const Secondbox = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #8a493d;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Endereco = styled.div`
  width: 22vw;
  height: 68vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h3 {
    font-size: 22px;
    font-family: "inter", sans-serif;
    font-weight: 600;
  }
  p {
    width: 12.8vw;
    height: 14vh;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-family: "inter", sans-serif;
  }
  h4 {
    width: 18.8vw;
    font-family: "inter", sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
  h5 {
    width: 11vw;
    height: 14vh;
    font-size: 18px;
    font-weight: 400;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-family: "inter", sans-serif;
  }
`;

export const Boxform = styled.div`
  width: 100%;
  height: 105vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f7;
  p {
    font-weight: 700;
    font-size: 36px;
    color: #f2b705;
    font-family: "inter", sans-serif;
    margin-bottom: 50px;
  }
  input {
    width: 51.5vw;
    height: 9vh;
    border: 1px solid #f2b705;
    margin-top: 18px;
    padding-left: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    outline: none;
  }
  button {
    border: none;
    width: 15vw;
    height: 6.5vh;
    border-radius: 50px;
    background-color: #f2b705;
    color: white;
    font-family: "inter", sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-top: 55px;
    cursor: pointer;
    letter-spacing: 1px;
    box-shadow: 0 6px 3px -2px gray;
  }
  .inputmensagem {
    height: 21vh;
    padding-bottom: 90px;
    text-align: justify;
    text-justify: inter-word;
  }
`;

export const Boxinput = styled.div`
  width: 51.5vw;
  height: 11vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 24.7vw;
    border: 1px solid #f2b705;
    padding-left: 20px;
  }
`;

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
  @media (max-width: 1080px) {
    height: 185vh;
  }
  @media (max-width: 915px) {
    height: 185vh;
  }
  @media (max-width: 790px) {
    height: 380vh;
    align-items: start;
  }
`;

export const Span = styled.span`
  width: 18vw;
  height: 51vh;
  margin-bottom: 23px;
  @media (max-width: 1080px) {
    width: 22vw;
    }
    @media (max-width: 915px) {
    width: 25vw;
    }
  @media (max-width: 790px) {   
      font-size: 11px;
      width: 65vw; 
      align-items: center;
      justify-content: space-evenly;  
    }
  span {
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
    @media (max-width: 1287px) {
      font-size: 12px;
  }
  @media (max-width: 915px) {
    width: 13vw;
    font-size: 11px;
    }
    @media (max-width: 790px) {
      font-size: 12px;
      width: 30vw;
      align-items: center;
      justify-content: space-evenly; 
      margin-left: 3vw; 
    }
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
  @media (max-width: 1080px) {
    width: 22vw;
    }
    @media (max-width: 915px) {
    width: 25vw;
    }
  @media (max-width: 790px) {
    border: 1px solid gray;
    width: 65vw;
    height: 50vh;
    }
  p {
    width: 12.7vw;
    height: 6vh;
    font-family: "inter", sans-serif;
    @media (max-width: 1287px) {
      font-size: 0.8em;
  }
  @media (max-width: 915px) {
      font-size: 0.7em;
      width: 15vw;
  }
    @media (max-width: 790px) {
      flex-direction: row;
      width: 45vw;
      height: 5vh;
      font-size: 3.7vw;
    }
  }
  img{
      width: 16vw;
      @media (max-width: 1080px) {
      width: 19vw;  
    }
      @media (max-width: 790px) {
      width: 55vw;  
    }
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
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 1287px) {
      width: 8vw;
      font-size: 10px;   
    }
    @media (max-width: 915px) {
      width: 10vw;
      font-size: 11px;   
    }
    @media (max-width: 790px) {
      width: 25vw;
      font-size: 11px; 
    }
    img{
      width: 1.2vw;
      @media (max-width: 1287px) {
        width: 1vw;
    }
    @media (max-width: 915px) {
      width: 1.2vw;
    }
      @media (max-width: 790px) {
        width: 3.5vw;
    }
    }
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
  
  @media (max-width: 1080px) {
    height: 180vh;
    gap: 60px;
  }
  @media (max-width: 915px) {
    height: 180vh;
    width: 78vw;
  }
  @media (max-width: 790px) {
    width: 100%;
    height: 380vh;
      flex-direction: column;
      justify-content: space-around;
      gap: 0px;
      flex-wrap: nowrap;
  }
`;

export const Secondbox = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #8a493d;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1287px) {
    height: 85vh;
  }
  @media (max-width: 790px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 205vh; 
  }
`;

export const Endereco = styled.div`
  width: 20vw;
  height: 68vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1287px) {
    width: 20vw;
    height: 68vh;
    img{
      width: 20vw;
    }
  }
  @media (max-width: 790px) {
    width: 90vw;
    height: 65vh;
    background-color: #6E3A30;
    img{
      width: 60vw;
    }
  }

  h3 {
    font-size: 22px;
    font-family: "inter", sans-serif;
    font-weight: 600;
    @media (max-width: 1287px) {
      font-size: 18px; 
  }
    @media (max-width: 790px) {
      font-size: 18px;   
  }
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
    @media (max-width: 1287px) {
      font-size: 13px;
  }
    @media (max-width: 790px) {
      font-size: 13px;
      width: 40vw;
  }
  }
  h4 {
    width: 18.8vw;
    font-family: "inter", sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 1287px) {
      font-size: 13px;
  }
    @media (max-width: 790px) {
      width: 60vw;
      font-size: 15px;
  }
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
    @media (max-width: 1287px) {
      font-size: 13px;
  }
    @media (max-width: 790px) {
      width: 35vw;
      font-size: 15px;
  }
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
  @media (max-width: 790px) {
      height: 100vh;
  }
  p {
    font-weight: 700;
    font-size: 36px;
    color: #f2b705;
    font-family: "inter", sans-serif;
    margin-bottom: 50px;
    @media (max-width: 1080px) {
      
  }
  @media (max-width: 790px) {
    font-size: 36px;
  }
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
    @media (max-width: 1080px) {
      
  }
    @media (max-width: 790px) {
      width: 80vw;
      height: 7vh;
  }
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
    @media (max-width: 1080px) {
      
  }
    @media (max-width: 790px) {
      margin-top: 48px;
      width: 29vw;
      height: 6.5vh;
  }
  }
  .inputmensagem {
    height: 21vh;
    padding-bottom: 90px;
    text-align: justify;
    text-justify: inter-word;
    @media (max-width: 1080px) {
      
  }
    @media (max-width: 790px) {
      height: 18vh;
      padding-bottom: 70px;
  }
  }
`;

export const Boxinput = styled.div`
  width: 51.5vw;
  height: 11vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1080px) {
      
      
  }
  @media (max-width: 790px) {
      
      display: flex;
      justify-content: center;
      align-items: center;
     flex-direction: column;
     width: 90vw;
     height: 19vh;
  }
  input {
    width: 24.7vw;
    border: 1px solid #f2b705;
    padding-left: 20px;
    @media (max-width: 1080px) {
      
  }
    @media (max-width: 790px) {
      width: 80vw;
      height: 20vh;
  }
  }
`;

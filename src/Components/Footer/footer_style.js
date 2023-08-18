import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  height: 12.8vh;
  background-color: #abaaaa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1080px) { 
  }
  @media (max-width: 790px) {
    height: 7vh; 
  }
`;

export const Secondelogo = styled.div`
  display: flex;
  width: 15vw;
  height: 12.8vh;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  @media (max-width: 1287px) {
    width: 19vw;
  }
  @media (max-width: 790px) {
      width: 43vw;
    height: 7vh; 
      justify-content: space-evenly;
  }
  
  @media (max-width: 915px) {
      width: 23vw;
  }
  @media (max-width: 375px) {
      width: 40vw;
  }
  h2 {
    font-size: 2em;
    color: #f2b705;
    font-family: "Righteous", sans-serif;
    @media (max-width: 1080px) {
      
  }
  @media (max-width: 915px) {
      font-size: 1.8em;
  }
    @media (max-width: 790px) {
      font-size: 1.2em;   
  }
  }
  img {
    width: 3.5vw;
    @media (max-width: 1080px) {    
  }
  @media (max-width: 915px) {
    width: 3.3vw;
  }
   @media (max-width: 790px) {
      width: 6.5vw;
  }
  }
`;

export const Icones = styled.div`
  width: 30vw;
  height: 12.8vh;
  padding: 0 30px 0 0;
  background-color: #abaaaa;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1287px) {
    img{
      width: 2.3vw;
    }
  }
  @media (max-width: 790px) {
    height: 7vh; 
    width: 48vw;
    padding: 0 0 0 0;
    img{
      width: 6vw;
    }
  }
  
`;

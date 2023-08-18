import styled from "styled-components";


export const Header = styled.header`
  display: flex;
  height: 13vh;
  position: sticky;
  top: 0px;
  z-index: 1;
  @media (max-width: 1287px) {
  }
  
  @media (max-width: 790px) {
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.3);
    height: 6vh; 
  }
  div {
    display: flex;
    width: 15vw;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    @media (max-width: 1287px) {     
      width: 19vw;
  }
  @media (max-width: 915px) {      
      width: 23vw;
  }
    @media (max-width: 790px) {
      width: 43vw;
      height: 5%.9;
      justify-content: space-evenly;
  }
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
      font-size: 1.5em; 
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
export const NavBox = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 84vw;
  background-color: rgba(0, 0, 0, 0.3);
  @media (max-width: 1080px) {
  }
  
  @media (max-width: 790px) {
    display: none;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    color: orange;
    font-size: 1.5em;
    width: 48vw;
    padding: 0 45px 0 0;
    @media (max-width: 1080px) {
    display: flex;
    align-items: center;
    width: 51vw;
  }
    
    a{
      text-decoration: none;
      cursor: pointer;
      font-size: 20px;
      font-family: "inter", sans-serif;
      font-weight: 400;
      color: orange;
      @media (max-width: 1080px) {
      font-size: 16px;
      height: 5vh;
  }
      }
    
    .linha {
      text-decoration: underline white;
      font-family: "inter", sans-serif;
      cursor: pointer;
      font-weight: 700;
      font-size: 20px;
      @media (max-width: 1080px) {
      text-decoration: none;
      font-size: 16px;
      height: 4vh;
      display: flex;
      align-items: center;
      padding-top: 10px;
  }
    }
  }
`;

export const Section = styled.section`
  height: 123vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1080px) {
    height: 95vh;
  }
  @media (max-width: 915px) {
    height: 78vh;
    
  }
  @media (max-width: 790px) {
    height: 78.5vh;
  }
  p {
    font-size: 55px;
    width: 38vw;
    position: relative;
    bottom: 8vh;
    left: 10vw;
    color: white;
    font-family: "inter", sans-serif;
    font-weight: 700;
    @media (max-width: 1287px) {
      width: 55vw;
      font-size: 50px;
  }
  @media (max-width: 1080px) {
    font-size: 42px;
  }
  @media (max-width: 915px) {
    font-size: 36px;
  }
    @media (max-width: 790px) {
      font-size: 1.3em;
      width: 85vw;
      position: relative;
      bottom: 3vh;
       left: 7vw;
       display: flex;
      justify-content: center;
  }
  }
`;

export const Hamburg = styled.section`
.dropdown {
  display:none;
      }
      @media (max-width: 1080px) {

  }   

 @media (max-width: 790px) {
.fa {
        color: orange;
        position: absolute;
        width: 100%;
        height: 9vw;
        padding-bottom: 1vh;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 9vw;
        text-decoration: none; 
    }
      
      .dropdown {
        position: relative;
        display: flex;
        cursor: pointer;
        width: 30vw;
        height: 6vh;
        background-color: rgba(0, 0, 0, 0.1);
      }
      
      .dropdown-content {
        display: none;
        width: 1vw;
        height: 1vh;
        position: absolute;
        background-color: rgba(0, 0, 0, 0);
        top: 6vh;
        left: 0vw;
      }
      
      .dropdown-content a {
        color: orange;
        width: 29.8vw;
        height: 5vh;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.6em;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background-color: rgba(0, 0, 0, 0.3);
      }
      
      .dropdown-content a:hover {color: gray;}
      
      .dropdown:hover .dropdown-content {display: block;}
      
      .dropdown:hover  {background-color: rgba(0, 0, 0, 0.3);}
  }   
  
`







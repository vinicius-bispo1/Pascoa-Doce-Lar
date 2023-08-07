import styled from "styled-components";


export const Header = styled.header`
  display: flex;
  height: 13vh;
  position: sticky;
  top: 0px;
  z-index: 1;
  div {
    display: flex;
    width: 15vw;
    align-items: center;
    justify-content: space-around;
    background-color: white;
  }
  h2 {
    font-size: 2em;
    color: #f2b705;
    font-family: "Righteous", sans-serif;
  }
  img {
    width: 3.5vw;
  }
`;
export const NavBox = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 84vw;
  background-color: rgba(0, 0, 0, 0.3);

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    color: orange;
    font-size: 1.5em;
    width: 48vw;

    padding: 0 45px 0 0;
    
      
    a{
      text-decoration: none;
      cursor: pointer;
      font-size: 20px;
      font-family: "inter", sans-serif;
      font-weight: 400;
      color: orange;
      }
    
    p {
      text-decoration: underline white;
      font-family: "inter", sans-serif;
      cursor: pointer;
      font-weight: 700;
      font-size: 20px;
    }
  }
`;

export const Section = styled.section`
  height: 123vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* border: solid 1px yellow; */
  p {
    font-size: 55px;
    width: 38vw;
    position: relative;
    bottom: 8vh;
    left: 10vw;
    color: white;
    font-family: "inter", sans-serif;
    font-weight: 700;
    /* border: solid yellow; */
  }
`;





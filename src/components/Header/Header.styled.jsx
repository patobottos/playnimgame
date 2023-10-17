import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 0;
  padding: 5px 1.5vw;
  border-bottom: 0.5px solid grey;
  position: relative;
  display: flex;
  z-index: 9999;

  .title {
    margin-left: 20px;
    font-size: 3rem;
    font-family: Raleway, sans-serif;
    font-weight: 800;
    letter-spacing: 0.1rem;

    :hover {
      :hover {
        color: #9f9daf;
        /* offset-x | offset-y | blur-radius | spread-radius | color */
        text-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .allowPopup {
    cursor: pointer;
  }
`;

/* Lato, Montserrat, Open Sans, Raleway, Roboto */

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  margin: 0 20px;

  nav {
    display: flex;
    flex-direction: row;
  }

  .icons {
    color: white;
    margin: 10px 1.4vw;
    height: 25px;
    padding: 5px;
    cursor: pointer;

    

    :hover {
      color: #9f9daf;
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      text-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    }
  }

`;
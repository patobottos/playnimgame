import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  margin: 15px 5vw;
  padding: 5px 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: Raleway, Raleway, Montserrat, "Open Sans", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.03rem;
  line-height: 1.6rem;
  font-weight: 300;

  .italics {
    font-style: italic;
  }

  .bold {
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px auto;
    text-align: left;
  }

  li {
    margin-top: 15px;
    text-decoration: none;
  }
`;

import styled from "styled-components";

export const FooterStyled = styled.div`
  border-top: 0.5px solid grey;
  margin-top: auto;
  margin-bottom: 30px;
  padding: 20px 0;
  max-height: 1vh;
  font-family: Roboto, Inter, Lato, Raleway, Montserrat, "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  letter-spacing: 0.06rem;

  .mentor {
    padding: 0 5px;
    color: yellow;

    a {
      color: inherit;
      padding-left: 5px;
      text-decoration: none !important;

      :hover {
        cursor: pointer;
      }
    }
  }

  .city {
    color: #D6A6E8;
  }
`
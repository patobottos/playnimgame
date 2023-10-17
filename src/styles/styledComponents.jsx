import styled from "styled-components";
import { Link } from "react-router-dom";

export const MyLink = styled(Link)`
  color: #2c394e;

  :hover {
    color: #666666;
  }
`;

export const BodyMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  text-align: center;
  font-family: Roboto, sans-serif;
  background-color: #3f3c5f;
  color: white;
`;

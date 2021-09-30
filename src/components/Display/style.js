import styled from "styled-components";

export const DivStyled = styled.div`
  background-color: white;
  border-radius: 7px;
  width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    width: 60%;
    list-style: none;
  }

  li {
    width: 100%;
    background-color: lightblue;
    margin: 5px 0;
  }
`;

import styled, { css } from "styled-components";

export default styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  font-size: 1em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  outline: 0;
  padding: 0;

  ${props =>
    props.liked &&
    css`
      font-weight: bold;
    `}
`;

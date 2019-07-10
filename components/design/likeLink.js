import styled, { css } from "styled-components";

export default styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  font-size: 1em;
  outline: 0;

  ${props =>
    props.liked &&
    css`
      font-weight: bold;
    `}
`;

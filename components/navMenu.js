import styled from "styled-components";

export default styled.nav`
  & ul {
    list-style: none;
    padding: 0;
  }

  & ul li {
    display: inline;
    margin-left: 1em;
  }

  & ul li:first-child {
    margin-left: 0;
  }
`;

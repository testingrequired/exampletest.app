import styled from "styled-components";

function Page({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default styled(Page)`
  border: 1px solid green;
  background-color: white;
  padding: 1em 2em;
`;

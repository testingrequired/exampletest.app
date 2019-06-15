import { useAuthContext } from "../contexts/authContext";
import styled from "styled-components";

const Style = styled.a`
  cursor: pointer;
`;

export default function LogoutLink(props) {
  const { logout } = useAuthContext();

  const onClick = e => {
    e.preventDefault();
    logout();
  };

  return <Style onClick={onClick}>Logout</Style>;
}

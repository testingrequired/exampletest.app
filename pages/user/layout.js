import ProtectedLayout from "../protectedLayout";
import { useAuthContext } from "../../contexts/authContext";

export default function UserLayout({ children }) {
  const { currentUser } = useAuthContext();

  return (
    <ProtectedLayout>
      <h2>{currentUser && currentUser.username}</h2>

      {children}
    </ProtectedLayout>
  );
}

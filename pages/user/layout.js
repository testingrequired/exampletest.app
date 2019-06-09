import ProtectedLayout from "../protectedLayout";

export default function UserLayout({ children }) {
  return (
    <ProtectedLayout>
      <h2>User</h2>

      {children}
    </ProtectedLayout>
  );
}

import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../layouts/layout";
import RegisterForm from "../components/registerForm";
import { useAuthContext } from "../contexts/authContext";

export default function RegisterPage() {
  const router = useRouter();
  const auth = useAuthContext();

  useEffect(() => {
    if (auth.currentUser) router.push("/user");
  }, [auth.currentUser]);

  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
}

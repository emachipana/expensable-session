import { useState } from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import LinkTo from "../components/LinkTo";
import { useAuth } from "../context/auth-context";
import * as Style from "./styles";

function LoginPage() {
  const { login } = useAuth();
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value
    }

    try {
      await login(credentials);
    }catch(e) {
      setError(e.message);
    }
  };

  return (
    <Style.Container onSubmit={handleSubmit}>
      <Style.Title>Login</Style.Title>
      <Style.Form>
        <FormInput label="email" type="email" placeholder="example@mail.com" />
        <FormInput label="password" type="password" placeholder="********" />
        { error ? <p>{error}</p> : null }
        <Button type="primary" style={{width: "100%", backgroundColor: "#F490B1"}}>LOGIN</Button>
      </Style.Form>
      <LinkTo to="/signup">Sign Up</LinkTo>
    </Style.Container>
  );
}

export default LoginPage;
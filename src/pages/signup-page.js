import Button from "../components/Button";
import FormInput from "../components/FormInput";
import LinkTo from "../components/LinkTo";
import * as Style from "./styles";
import { useAuth } from "../context/auth-context";
import { useState } from "react";

function SignUpPage() {
  const { signup } = useAuth();
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const { email, password, first_name, last_name, phone } = e.target.elements;
    const payload = {
      email: email.value,
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value,
      phone: phone.value
    }

    try {
      await signup(payload);
    }catch(e) {
      setError(e.message);
    }
  };

  return (
    <Style.Container>
      <Style.Title>Sign Up</Style.Title>
      <Style.Form onSubmit={handleSubmit}>
        <FormInput label="email" type="email" placeholder="example@mail.com" />
        <FormInput label="password" type="password" placeholder="********" />
        <FormInput label="first name" placeholder="John" />
        <FormInput label="last name" placeholder="Doe" />
        <FormInput label="phone" type="number" placeholder="984601113" />
        { error ? <p>{error}</p> : null }
        <Button type="primary" style={{width: "100%", backgroundColor: "#F490B1"}}>SIGN UP</Button>
      </Style.Form>
      <LinkTo to="/login">Login</LinkTo>
    </Style.Container>
  );
}

export default SignUpPage;

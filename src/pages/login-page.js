import Button from "../components/Button";
import FormInput from "../components/FormInput";
import Link from "../components/Link";
import * as Style from "./styles";

function LoginPage() {
  return (
    <Style.Container>
      <Style.Title>Login</Style.Title>
      <Style.Form>
        <FormInput label="email" type="email" placeholder="example@mail.com" />
        <FormInput label="password" type="password" placeholder="********" />
        <Button type="primary" style={{width: "100%", backgroundColor: "#F490B1"}}>LOGIN</Button>
      </Style.Form>
      <Link>Sign Up</Link>
    </Style.Container>
  );
}

export default LoginPage;
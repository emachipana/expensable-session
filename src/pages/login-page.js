import Button from "../components/Button";
import FormInput from "../components/FormInput";
import LinkTo from "../components/LinkTo";
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
      <LinkTo to="/signup">Sign Up</LinkTo>
    </Style.Container>
  );
}

export default LoginPage;
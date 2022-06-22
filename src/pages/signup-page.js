import Button from "../components/Button";
import FormInput from "../components/FormInput";
import LinkTo from "../components/LinkTo";
import * as Style from "./styles";

function SignUpPage() {
  return (
    <Style.Container>
      <Style.Title>Sign Up</Style.Title>
      <Style.Form>
        <FormInput label="email" type="email" placeholder="example@mail.com" />
        <FormInput label="password" type="password" placeholder="********" />
        <FormInput label="first name" placeholder="John" />
        <FormInput label="last name" placeholder="Doe" />
        <FormInput label="phone" type="number" placeholder="984601113" />
        <Button type="primary" style={{width: "100%", backgroundColor: "#F490B1"}}>SIGN UP</Button>
      </Style.Form>
      <LinkTo to="/login">Login</LinkTo>
    </Style.Container>
  );
}

export default SignUpPage;

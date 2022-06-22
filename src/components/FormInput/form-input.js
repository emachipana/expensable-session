import * as Style from "./styles";

function FormInput({ label, type = "text", placeholder }) {
  return(
    <Style.InputContainer>
      <Style.Label htmlFor={label}>{label}</Style.Label>
      <Style.Input 
        type={type}
        id={label}
        placeholder={placeholder}
        name={label}  
      />
    </Style.InputContainer>
  );
};

export default FormInput;

import * as Style from "./styles";

function FormInput({ label, type = "text", placeholder }) {
  const labelParsed = label.replace(/ /g, "_");
  return(
    <Style.InputContainer>
      <Style.Label htmlFor={labelParsed}>{label}</Style.Label>
      <Style.Input 
        type={type}
        id={labelParsed}
        placeholder={placeholder}
        name={labelParsed}  
      />
    </Style.InputContainer>
  );
};

export default FormInput;

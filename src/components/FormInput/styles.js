import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const InputContainer = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-family: ${fonts.primary};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.125em;
  text-transform: uppercase;
  color: ${colors.gray[500]};
`;

export const Input = styled.input`
  background-color: white;
  width: 100%;
  outline: none;
  border: 1px solid ${colors.gray[200]};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  color: ${colors.gray[600]};
`;

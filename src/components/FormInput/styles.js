import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const InputContainer = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const Label = styled.label`
  font-family: ${fonts.primary};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.125em;
  text-transform: uppercase;
  color: ${colors.gray[800]};
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-family: ${fonts.primary};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: white;
  width: 320px;
  outline: none;
  border: 1px solid ${colors.gray[200]};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  color: ${colors.gray[600]};
  padding: 8px 12px;
`;

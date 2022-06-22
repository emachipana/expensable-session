import styled from "@emotion/styled";
import { colors, fonts } from "../styles";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

export const Form = styled.form`
  margin: 0 1rem;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-family: ${fonts.primary};
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: ${colors.gray[900]};
`;

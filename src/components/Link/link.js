import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const LinkButton = styled.a`
  font-family: ${fonts.primary};
  text-decoration: none;
  font-size: 16px;
  color: ${colors.pink[500]};
  line-height: 24px;
`;

function Link({ onClickLink, name }) {
  return <LinkButton onClick={onClickLink}>{name}</LinkButton>
}

export default Link;

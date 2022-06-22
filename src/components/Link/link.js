import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const LinkButton = styled.a`
  font-family: ${fonts.primary};
  text-decoration: none;
  font-size: 16px;
  color: ${colors.pink[500]};
  line-height: 24px;
`;

function Link({ onClickLink, children }) {
  return <LinkButton onClick={onClickLink}>{children}</LinkButton>
}

export default Link;

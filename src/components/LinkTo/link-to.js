import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors, fonts } from "../../styles";


export const StyledLink = styled(Link)`
  font-family: ${fonts.primary};
  text-decoration: none;
  font-size: 16px;
  color: ${colors.pink[500]};
  line-height: 24px;
  cursor: pointer;
`;

function LinkTo({ children, to, onClick }) {
  return <StyledLink to={to} onClick={onClick}>{children}</StyledLink>
}

export default LinkTo;

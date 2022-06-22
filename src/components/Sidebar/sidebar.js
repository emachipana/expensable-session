import styled from "@emotion/styled";
import { colors } from "../../styles";
import SidebarNav from "../SidebarNav/sidebar-nav";
import { ReactComponent as Logo } from "./../../assets/expensable-logo.svg";

export const Wrapper = styled.div`
    padding: 1.25rem 0.5rem;
    background-color: ${colors.gray[100]};
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

function Sidebar() {
  return (
      <Wrapper>
          <Logo />
          <SidebarNav />
      </Wrapper>
  )
}

export default Sidebar;
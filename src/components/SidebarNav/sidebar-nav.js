import styled from "@emotion/styled";
import { BiCategoryAlt } from "react-icons/bi";
import { BsReceiptCutoff } from "react-icons/bs";
import { GiTargeted } from "react-icons/gi";
import { useAuth } from "../../context/auth-context";
import { colors, fonts } from "../../styles";
import SidebarNavItem from "./sidebar-nav-item";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85vh;
  gap: 0.5rem;
`;

const Name = styled.h1`
  font-family: ${fonts.secondary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.gray[700]};
`;

const Email = styled.p`
  font-family: ${fonts.secondary};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.gray[500]};
  margin-bottom: 8px;
`;

const LinkTo = styled.a`
  font-family: ${fonts.primary};
  text-decoration: none;
  font-size: 16px;
  color: ${colors.pink[500]};
  line-height: 24px;
  cursor: pointer;
`;

function SidebarNav() {
  const { logout, user } = useAuth();

  async function handleLogout() {
    try {
      await logout()
    }catch(e) {
      console.error(e);  
    }
  }

  const navigation = [
    {
        name: "Categories",
        to: "/categories",
        icon: <BiCategoryAlt />
    },
    {
        name: "Transactions",
        to: "/transactions",
        icon: <BsReceiptCutoff />
    },
    {
        name: "Budgets",
        to: "/budgets",
        icon: <GiTargeted />
    }
  ];

  return (
    <Wrapper>
      <div>
        {navigation.map((nav) => (
            <SidebarNavItem key={nav.name} {...nav} />
        ))}
      </div>
      <div>
        <Name>{user.first_name} {user.last_name}</Name>
        <Email>{user.email}</Email>
        <LinkTo onClick={handleLogout}>Logout</LinkTo>
      </div>
    </Wrapper>
  );
}

export default SidebarNav;
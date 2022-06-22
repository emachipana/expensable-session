import styled from "@emotion/styled";
import { BiCategoryAlt } from "react-icons/bi";
import { BsReceiptCutoff } from "react-icons/bs";
import { GiTargeted } from "react-icons/gi";
import { useAuth } from "../../context/auth-context";
import SidebarNavItem from "./sidebar-nav-item";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
      {navigation.map((nav) => (
          <SidebarNavItem key={nav.name} {...nav} />
      ))}
      <hr />
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </Wrapper>
  );
}

export default SidebarNav;
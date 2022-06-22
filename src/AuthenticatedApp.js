import styled from "@emotion/styled";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { colors } from "./styles";

const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: ${colors.gray[50]};
  height: 100vh;
`;

const MainContainer = styled.main`
    padding: 1.5rem 2rem;
`;

const CategoriesPage = () => <h1>Categories Page</h1>
const TransactionsPage = () => <h1>Transactions Page</h1>
const BudgetsPage = () => <h1>Budgets Page</h1>

function AuthenticatedApp() {
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Navigate to="/categories" />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/budgets" element={<BudgetsPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </MainContainer>
    </Container>
  );
}

export default AuthenticatedApp;

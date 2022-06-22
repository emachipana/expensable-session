import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getUser, createUser } from "../services/users-service";
import * as auth from "./../services/sessions-service"

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadig, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.error(e);
      });
  }, [setUser]);

  function login(credentials) {
    return auth.login(credentials).then((data) => {
      setUser(data);
      navigate("categories");
    });
  };

  function logout() {
    return auth.logout().then(() => {
      setUser(null);
      navigate("login");
    });
  };

  function signup(data) {
    return createUser(data).then((data) => {
      setUser(data);
      navigate("categories");
    });
  };

  if(loadig) return <p>Loading....</p>

  return (
    <AuthContext value={{ user, login, logout, signup }}>
      { children }
    </AuthContext>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

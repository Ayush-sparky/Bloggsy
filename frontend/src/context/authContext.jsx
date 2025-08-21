import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer, initialAuthState } from "../reducers/authReducer";
import authServices from "../services/authServices";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // useEffect(() => {
  //   const checkUser = async () => {
  //     try {
  //       const user = authServices.getCurrentUser();

  //       if (user) {
  //         dispatch({ type: "LOGIN_SUCCESS", payload: user });
  //       } else {
  //         dispatch({ type: "LOGIN_FAILURE", payload: null });
  //       }
  //     } catch (err) {
  //       dispatch({ type: "LOGIN_FAILURE", payload: err.message });
  //     }
  //   };
  //   checkUser();
  // }, []);

  const login = async (userData) => {
    try {
      const response = await authServices.loginUser(userData);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.user });
      return response;
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };

  const register = async (userData) => {
    try {
      const res = await authServices.registerUser(userData);
      return res;
    } catch (err) {
      return err;
    }
  };

  const logout = () => {
    authServices.logout();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

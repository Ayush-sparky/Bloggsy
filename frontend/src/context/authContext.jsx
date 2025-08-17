import { createContext, useEffect, useReducer } from "react";
import { authReducer, initialAuthState } from "../reducers/authReducer";
import authServices from "../services/authServices";

const AuthContext = createContext();

export default AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = authServices.getCurrentUser();

        if (user) {
          dispatch({ type: "LOGIN_SUCCESS", payload: user });
        } else {
          dispatch({ type: "LOGIN_FAILURE", payload: null });
        }
      } catch (err) {
        dispatch({ type: "LOGIN_FAIL", payload: err.message });
      }
    };
    checkUser();
  }, []);

   const login = async (userData) => {
     try {
       const user = await authServices.loginUser(userData);
       dispatch({ type: "LOGIN_SUCCESS", payload: user });
     } catch (err) {
       dispatch({ type: "LOGIN_FAILURE", payload: err });
     }
   };

   const register = async (userData) => {
     await authServices.registerUser(userData);
   };

   const logout = async () => {
     await authServices.logout();
   };

   return <AuthContext.Provider value={{...state, login, register, logout}}>
    {children}
   </AuthContext.Provider>
};

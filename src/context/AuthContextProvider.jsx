import React, { useContext, createContext } from "react";

const AuthContext = createContext(); // öncelikle createcontext kullanılarak authcontext adından bir context oluştururuz (1)

// contextetn bilgi çekmek için, bu method herhangi bir yerden çağrıldıında useConetxt sayesinde çağırdığımız bilgileri döndürecek
function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = () => {
  return <div>AuthProvider</div>;
};

export default AuthContextProvider;

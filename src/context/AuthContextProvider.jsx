import React, { useContext, createContext } from "react";

const AuthContext = createContext(); // öncelikle createcontext kullanılarak authcontext adından bir context oluştururuz (1)

// contextetn bilgi çekmek için, bu method herhangi bir yerden çağrıldıında useConetxt sayesinde çağırdığımız bilgileri döndürecek (2)

//bu contexti okuyacağımız method birçok component tarafından kullanılacak buralardan bunları okyabilmek için useAuth methodunu çağırmak gerekir. bunun için export yapılması gerekir (3)
export function useAuth() {
  return useContext(AuthContext); //(2)
}

const AuthContextProvider = () => {
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  return <div></div>;
};

export default AuthContextProvider;

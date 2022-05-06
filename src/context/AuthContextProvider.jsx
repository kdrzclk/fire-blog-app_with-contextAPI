import { Password } from "@mui/icons-material";
import React, { useContext, createContext } from "react";
import { auth, googleProvider } from "../utils/firebaseUtil";

const AuthContext = createContext(); // öncelikle createcontext kullanılarak authcontext adından bir context oluştururuz (1)

// contextetn bilgi çekmek için, bu method herhangi bir yerden çağrıldıında useConetxt sayesinde çağırdığımız bilgileri döndürecek (2)

//bu contexti okuyacağımız method birçok component tarafından kullanılacak buralardan bunları okyabilmek için useAuth methodunu çağırmak gerekir. bunun için export yapılması gerekir (3)
export function useAuth() {
  return useContext(AuthContext); //(2)
}

const AuthContextProvider = () => {
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    auth.signOut();
  }

  function loginWithGoogle() {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    auth.signInWithPopup(googleProvider);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  return <div></div>;
};

export default AuthContextProvider;
